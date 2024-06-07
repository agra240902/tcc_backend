const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host : '34.101.157.185',
    user : 'root',
    password : '',
    database : 'salon'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("Database Connected");
});
module.exports = dbConn;