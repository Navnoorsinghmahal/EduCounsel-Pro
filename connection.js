const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "System123@",
    database: "university"
})
connection.connect(function (error) {
    if(error){
        console.log(error.message);
    }else {
        console.log("Database connected successfully.");
    }
})

module.exports = connection;
