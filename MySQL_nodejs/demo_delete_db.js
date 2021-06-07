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
    var sql = "DELETE FROM customers_new WHERE address LIKE 'S%'"
    con.query(sql, function(err, results){
        if(err) throw err;
        console.log("Table Created!");
        console.log('No of rows Deleted:'+ results.affectedRows);
        
    });
});

