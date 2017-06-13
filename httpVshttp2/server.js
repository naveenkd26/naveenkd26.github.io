var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.send('index.html');
// });

app.use(express.static('public'))

app.listen(8080);