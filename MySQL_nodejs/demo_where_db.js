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
    //select query for specific parameter
    //var sql = "SELECT * FROM customers_new WHERE address = 'Park Lane 38'";
    //select query for wildcard Characters
    var sql = "SELECT * FROM customers_new WHERE address LIKE 'S%'";
    con.query(sql, function(err, results){
        if(err) throw err;
        console.log("Table Created!");
        console.log(results);
        
    });
});

