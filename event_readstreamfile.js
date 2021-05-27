var fs = require('fs');
var rs = fs.ReadStream('mynewfile.txt');

rs.on('open', function(){
    console.log('The file is Open');
})