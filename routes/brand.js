var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request'),
    fs = require('fs');
router.get('/', function(req, res, next) {
  var  reqUrl = "http://apis.haoservice.com/lifeservice/car/GetSeries?key=43b013c398194bd3b8a1774d2fc4c9b5"
  request({
    uri: reqUrl
  }, function(error, response, body) {
    res.send(body);
  });
});
module.exports = router;
