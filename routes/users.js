var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('xyy是个大帅哥');
});

module.exports = router;
