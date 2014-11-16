var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app/build/assets'))
app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
  res.send('Content')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
