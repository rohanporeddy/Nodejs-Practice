var fs = require('fs');

fs.readFile('mynewfile2.txt', function(err, data){
    if(err) throw err;
    console.log(data);
});