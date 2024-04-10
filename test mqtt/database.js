const mysql = require('mysql2'); 
// Create a MySQL connection pool
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
  });
  db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
    } else {
        //console.log('Connected to MySQL database!');
        connection.release();
    }
});  
module.exports=db;