var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/rohan.html?x=10&a=10&b=10&c=10&d=10&';


http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    var q = url.parse(adr, true).search;
    console.log(q);
   res.end();

}).listen(8080);