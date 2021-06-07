var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rohan"
});


con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    //var sql = 'show dabases;'
    // con.query(sql, function(err, result){
    //     if(err) throw err;
    //     console.log("Result " + result);
    // })
});


