var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/admin/register', function(req, res, next) {
  res.send('what the fuck');
});


module.exports = router;
