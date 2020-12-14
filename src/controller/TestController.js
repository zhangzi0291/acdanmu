var testService = require('../service/TestService');


const controller = {
    test(ctx){
        var a = ctx.request.query.a
        var body = ctx.request.body
        var test = testService.test()
        console.log(test)
        return test
    },
    wstest(ctx){
        var uid = ctx.query.uid
        testService.ws(uid)
        return uid
    }

}


module.exports = controller;