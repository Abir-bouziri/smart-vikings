const mysql = require('mysql2'); 
const fs = require('fs');
// Create a MySQL connection pool
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
  });
// connect to the database 
  const cnn = () => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL database: ', err);
        } else {
            //console.log('Connected to MySQL database!');
            connection.release();
            score();
        }
    });}
    //const query=" SELECT * FROM test.makerlabs "
    const querry =" SELECT * FROM test.makerlabs INNER JOIN test.robots ON test.makerlabs.id = test.robots.idrobots;"
 // data of select    
 function score (){
  const a = db.query(querry, (err, results) => {  
           if (err) { 
           console.log(err);
        } else {      
         joueurs = results ;
        // console.log(joueurs);
         fun1(joueurs);         
        }  }
        );   }
// function to concat the sql data and js file 
function fun1(joueurs){
    // File path where you want to write the data
    const filePath = './public/test2.js';
    const jsonData = JSON.stringify(joueurs, null, 4);
    // Read the existing content of the file
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
    // Truncate the file to delete its content
    fs.truncate(filePath, 0, (err) => {
        if (err) {
            console.error('Error truncating file:', err);
            return;
        }
        //console.log('Content of the file has been deleted.');
    });
    const sourceFilePath = 'test3.js';
    const destinationFilePath = './public/test2.js';
    const jou="joueurs="+jsonData+'\n'+appendFileContent(sourceFilePath, destinationFilePath)+'\n';
    // Write the data to the file
    fs.appendFile(filePath,jou, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        //console.log('Data has been written to the file');
    });
})
}
// Function to append file content (append js code )
function appendFileContent(sourceFilePath, destinationFilePath) {
    // Read content of the source file
    fs.readFile(sourceFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading source file:', err);
            return;
        }
        const contentWithNewline ='\n'+ data + '\n';
        // Append content of the source file to destination file
        fs.appendFile(destinationFilePath, contentWithNewline, (err) => {
            if (err) {
                console.error('Error appending to destination file:', err);
                return;
            }
            console.log('Content appended successfully.');
        });
    });
}
//setInterval( cnn, 3000);
setInterval(cnn, 6000);

