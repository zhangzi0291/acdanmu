var router = require('koa-router')();

var controller = require('../src/controller/TestController');

router.prefix('/test');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/test', function *(next) {
  this.body = controller.test(this);
});
router.get('/wstest', function *(next) {
  this.body = controller.wstest(this);
});

module.exports = router;
