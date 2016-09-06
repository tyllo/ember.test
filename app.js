var express = require("express");
var app = express();
var server = require("./server");

server(app);

app.use(express.static('public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
