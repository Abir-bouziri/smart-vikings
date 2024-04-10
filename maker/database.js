const mysql = require('mysql2'); 
// Create a MySQL connection pool
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
  });
module.exports=db;
