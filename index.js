var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

//      fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
  //      if (err) console.log(err);
    //    res.writeHead(200, {'Content-Type': 'text/css'});
//        res.write(data);
  //      res.end();
    //  });

var message = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(message);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
