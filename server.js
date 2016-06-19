var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require("./middleware.js");
app.use(middleware.logger);
app.get('/index.html',function(req,res)
{
res.send('hello express');
});
app.get('/about',function(req,res)
{
res.send('About us');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
console.log('express server started'+ PORT);
});
