var http = require('http');

var dt = require('./myfirstmodule.js');
http.createServer(function(req, res){
    res.writeHead(200, {'Context-Type' : 'text/html'});
    res.write("The date and time currently are : " + dt.myDate());
    res.end();
}).listen(8080)