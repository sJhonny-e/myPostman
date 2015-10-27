var express = require('express');
var app = express();

app.use(express.static('../public'));

var fileName = './data/response.';
app.get('/spaces/', function (req, res) {
  var format = req.query.format || 'json';
  res.download(fileName + format);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
