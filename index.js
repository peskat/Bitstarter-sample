var express = require('express')
var app = express()
var fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var message = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(message)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
