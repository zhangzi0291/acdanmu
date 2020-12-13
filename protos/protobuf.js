const Register  = require('./im.basic/Register')['AcFunDanmu']['RegisterRequest']
const AppInfo  = require('./im.basic/Register')['AcFunDanmu']['AppInfo']
const DeviceInfo  = require('./im.basic/Register')['AcFunDanmu']['DeviceInfo']
const ZtCommonInfo  = require('./im.basic/Register')['AcFunDanmu']['ZtCommonInfo']

const protobuf = {
    Register(userId){
        var register = new Register({
            appInfo: new AppInfo({
                appName: "link-sdk",
                sdkVersion: "1.2.1",
            }),
            deviceInfo: new DeviceInfo({
                platformType: DeviceInfo.PlatformType['H5'],
                deviceModel:  "h5",
            }),
            presenceStatus:  Register.PresenceStatus['kPresenceOnline'],
            appActiveStatus: Register.ActiveStatus['kAppInForeground'],
            // instanceId:      t.instanceID,
            ztCommonInfo: new ZtCommonInfo({
                kpn: "ACFUN_APP",
                kpf: "PC_WEB",
                uid: userId,
            }),
        })
        var buffer = Register.encode(register).finish()
        console.log(buffer)
        console.log(Register.decode(buffer))

    }
}


module.exports = protobuf;