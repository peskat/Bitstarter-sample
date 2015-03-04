var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var buf = fs.readFileSync('index.html');

var message = buf.toString();

app.get('/', function(request, response) {
  response.send(message)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
