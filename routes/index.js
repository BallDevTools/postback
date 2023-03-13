var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({params: req.query, body: req.body});
});


module.exports = router;
