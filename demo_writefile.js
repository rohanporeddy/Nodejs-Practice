var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Welocome to my world!', function(err){
    if(err) throw err;
    console.log('Saved!');

});