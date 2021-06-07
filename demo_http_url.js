var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(req.url);
    res.end();


      
    res.end();
    
}).listen(8080);


var http  = require('http')