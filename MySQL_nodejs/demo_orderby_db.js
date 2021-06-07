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
    //order by Ascending Order
    //var sql = "SELECT * FROM customers_new ORDER BY name";
    //order by Descending order
    var sql = "SELECT * FROM customers_new ORDER BY name DESC";
    con.query(sql, function(err, results){
        if(err) throw err;
        console.log("Table Created!");
        console.log(results);
        
    });
});

