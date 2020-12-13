const ProtoBufJs = require("protobufjs");

const protobuf = {

    RegisterRequest(){

        var appInfoProto = ProtoBufJs.loadSync("./protos/im.basic/Register.proto")
        var appInfo = appInfoProto.lookupType("AcFunDanmu.AppInfo")
        var appInfoObj = appInfo.create()
        appInfoObj.appName = "link-sdk"
        appInfoObj.sdkVersion = "1.2.1"

        console.log(appInfoObj)
        var buffer = appInfo.encode(appInfoObj).finish();
        console.log(buffer)
        var decode = appInfo.decode(buffer)
        console.log("decode+"+decode)

    },

}



module.exports = protobuf;