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
        testService.protobuf()
        return "wstest"
    }

}


module.exports = controller;