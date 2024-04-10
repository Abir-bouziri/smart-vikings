const db=require('./database');
const fs = require('fs');
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
    } else {
        console.log('Connected to MySQL database!');
        connection.release();
    }
});
const querry ="SELECT * FROM test3.robots"
// data of select    
function score (){
 db.query(querry, (err, results) => {  
          if (err) { 
          console.log(err);
       } else {      
        joueurs = results ;
        affiche(results);
       }  }
       );   }
 score();     


function affiche (a) {  
    fs.truncate('C:/Users/bouzi/Downloads/fighter/photo/affiche1.js', 0, (err) => {
        if (err) {
            console.error('Error truncating file:', err);
            return;
        }
       // console.log('Content of the file has been deleted.');
    });
    
    const jsonData = JSON.stringify(a, null, 4);
// Read the existing contents of the file
fs.readFile('C:/Users/bouzi/Downloads/fighter/photo/js.js', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Data to append to the beginning of the file
    const newData = 'New data to append\n';

    // Combine the new data with the existing contents
    const combinedData = " const joueurs="+ jsonData  +'\n'+ data;

    // Write the combined data back to the file
    fs.writeFile('C:/Users/bouzi/Downloads/fighter/photo/affiche1.js', combinedData, 'utf8', (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        //console.log("Data appended to the beginning of the file.");
    });
}); }

module.exports=score;
