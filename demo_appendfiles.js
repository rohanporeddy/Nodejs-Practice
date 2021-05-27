var fs = require('fs');

fs.appendFile('mynewfile.txt', 'This is the new Content Developed in the file system!', function(err){
    if(err) throw err;
    console.log('Saved!');

});