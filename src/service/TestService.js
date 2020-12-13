const io  = require('socket.io-client')    
const axios = require('axios');
const qs = require('qs');
const ProtoBufJs = require("protobufjs");

const service = {
    test(){
        return "test"
    },
    protobuf(){

        ProtoBufJs.
        var proto = ProtoBufJs.loadSync("./protos/im.basic/AppInfo.proto")
        var appInfo = proto.lookupType("AcFunDanmu.AppInfo")
        var appInfoObj = appInfo.create()
        appInfoObj.appName = "link-sdk"
        appInfoObj.sdkVersion = "1.2.1"
        console.log(appInfoObj)
        var buffer = appInfo.encode(appInfoObj).finish();
        console.log(buffer)
        var decode = appInfo.decode(buffer)
        console.log(decode)  
    },
    async ws(){
        let token;
        await this.getACToken().then((data)=>token = data)
        let suffix = "?subBiz=mainApp&kpn=ACFUN_APP&kpf=PC_WEB&userId="+token.userId+"&did="+token._did+"&acfun.api.visitor_st="+token.visitor_st
        console.log(token)
        
        let liveInfo;
        await this.getLiveInfo(suffix,token._did,"386001").then((data)=>liveInfo = data)
        console.log(liveInfo)

        let userId = token.userId
        let liveId = liveInfo.liveId

        let giftList;
        await this.getGiftList(suffix,liveId,userId).then((data)=>giftList = data)
        // console.log(giftList)

        let watchingList;
        await this.getWatchingList(suffix,liveId,userId).then((data)=>watchingList = data)
        console.log(watchingList.length)

        this.wsCreate()

    },
    async getACToken(){
        let _did;
        let visitor_st;
        let userId;
        let acSecurity;
        await axios.get("https://live.acfun.cn").then(res => {
            var setcookie = res.headers['set-cookie']
            _did = this.getCookie(setcookie[0],"_did")
            
        })
        await axios.post("https://id.app.acfun.cn/rest/app/visitor/login",qs.stringify({
            'sid': 'acfun.api.visitor' 
        }),{
            headers:{
                'Cookie': '_did='+_did,
            }
        }).then(res => {
            visitor_st = res.data['acfun.api.visitor_st'];
            userId = res.data['userId'];
            acSecurity = res.data['acSecurity'];
        })
        return {
            visitor_st:visitor_st,
            userId:userId,
            acSecurity:acSecurity,
            _did:_did,
        }
        
    },
    async getLiveInfo(suffix,_did,authorId){
        let liveId
        let availableTickets;
        let enterRoomAttach;
        let title;
        let liveStartTime;
        let url = "https://api.kuaishouzt.com/rest/zt/live/web/startPlay"+suffix;
        await axios.post(url,qs.stringify({
            'authorId': authorId,
            'pullStreamType': "FLV",
        }),{
            headers:{
                "Referer": "https://live.acfun.cn/"
            }
        }).then(res => {
            var data = res.data.data;
            liveId = data.liveId
            title = data.caption
            availableTickets = data.availableTickets
            enterRoomAttach = data.enterRoomAttach
            liveStartTime = data.liveStartTime
        })
        return {
            liveId:liveId,
            title:title,
            availableTickets:availableTickets,
            enterRoomAttach:enterRoomAttach,
            liveStartTime:liveStartTime,
        }
    },
    async getGiftList(suffix,liveId,userId){
        let url = "https://api.kuaishouzt.com/rest/zt/live/web/gift/list"+suffix;
        let giftList;
        await axios.post(url,qs.stringify({
            'liveId': liveId,
            'visitorId': userId,
        })).then(res => {
            giftList = res.data.data.giftList;
        })
        return giftList;
    },
    async getWatchingList(suffix,liveId,userId){
        let url = "https://api.kuaishouzt.com/rest/zt/live/web/watchingList"+suffix;
        let watchingList;
        await axios.post(url,qs.stringify({
            'liveId': liveId,
            'visitorId': userId,
        })).then(res => {
            console.log(res.data)
            watchingList = res.data.data.list;
        })
        return watchingList;
    },
    wsCreate(){
        io
        return ""
    },
    getCookie(cookie,name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    }
}


module.exports = service;