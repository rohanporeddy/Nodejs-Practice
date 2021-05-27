var fs = require('fs');

fs.rename('mynewfile3.txt', 'mynewfile3renamed.txt', function(err){
    if(err) throw err;
    console.log('File Renamed');
})