var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rohan",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "DROP TABLE customers";

    con.query(sql, function(err, results){
        if(err) throw err;
        console.log("Table Deleted!");
        console.log(results);
        
    });
});

