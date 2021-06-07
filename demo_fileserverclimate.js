var http = require('http');
var url = require('url');
var fs = require('fs');
var folder = "/node.js";


http.createServer(function(req, res){
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return res.end();
    }
    var filename = url.parse(req.url, true).pathname;
    filename = '.' + folder + filename;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Context-type' : 'text/html'});
            res.end('404 not found error');
            
        }
        res.writeHead(200, {'Context-type':'text/html'});
        res.write(data);
        res.end();
    })
    

}).listen(8080);
