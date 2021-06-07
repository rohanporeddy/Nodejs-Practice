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
    //selecting all columns from customers_new table
    //var sql = "SELECT * FROM customers_new";
    //selecting address column from customers_new table
    var sql = "SELECT address from customers_new";

    con.query(sql, function(err, fields, results){
        if(err) throw err;
        //console.log(results);
        console.log(results);
    });
});

