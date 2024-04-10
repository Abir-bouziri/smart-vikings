const { query } = require('express');
const db=require('./database.js');
db.getConnection((err, connection) => {
    if (err) {
      //  console.error('Error connecting to MySQL database: ', err);
    } else {
        //console.log('Connected to MySQL database!');
        connection.release();
    }
})
const ajout=(req, res) => {
      res.status(200).json({ message: 'Post request received successfully.', data:req.body });
      querry="INSERT INTO `test`.`robots` (`robotname`, `robotuser`,`etablisement`,`homologation`) VALUES (?,?,?,?)",
db.query(querry ,[req.body.robname,req.body.robuser,req.body.robuniversity,req.body.homologation], (err, results) => {  
    if (err) { 
    console.log(err);
 } else {      
  console.log("ok ");        
 }  }
 );
  }
const update=(req, res) => {
    const email = req.body;
    /*console.log('Email submitted:', email);
    res.send('Email submitted successfully.'+email);*/
    querry1=`UPDATE test.makerlabs SET Score = ${email.score}, ch1 = ${email.ch1}, ch2 = ${email.ch2}, ch3 = ${email.ch3}, ch4 = ${email.ch4}, ch5 = ${email.ch5}, ch6 = ${email.ch6}, ch7 = ${email.ch7}, ch8 = ${email.ch8}, ch9 = ${email.ch9}, disqualification = ${email.diss}, y = ${email.y}, ch10 = ${email.ch10} WHERE (id = ${email.id});`;
    res.status(200).json({ message: 'Post request received successfully.', data: email });
    db.query(querry1,(err, results) => {  
        if (err) { 
        console.log(err);
     } else {      
      console.log("test ffvfcvf");        
     }  }
     );
}
qy="SELECT * FROM test.makerlabs INNER JOIN test.robots ON test.makerlabs.id = test.robots.idrobots ORDER BY id DESC LIMIT 1";
//quer='SELECT * FROM test.makerlabs INNER JOIN test.robots ON test.makerlabs.id = test.robots.idrobots where test.makerlabs.id=17'
const state=(req, res) => {
    // Perform SQL query to fetch data
    db.query(qy, (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      console.log(results);
      // Render EJS template and pass data
      res.render('index', { data : results});
  })}
module.exports={ajout,update,state}