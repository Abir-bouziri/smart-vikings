const express = require('express');
const WebSocket = require('ws');
const mysql = require('mysql2');
const app = express();
const wss = new WebSocket.Server({ port: 3000});

const db =mysql.createPool({
  host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
});

db.getConnection((err, connection) => {
  if (err) {
      console.error('Error connecting to MySQL database: ', err);
  } else {
      console.log('Connected to MySQL database!');
    
  }
})

const sendToClients = (message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};
querry1="SELECT * FROM test.makerlabs INNER JOIN test.robots ON test.makerlabs.id = test.robots.idrobots ORDER BY id DESC LIMIT 1"
const checkChangesAndNotify = (challenge_array, id_array) => {
  db.query(querry1, (err, results) => {
    if (err) throw err;
    try {
      if (id_array.indexOf(results[0].id) === -1) {
        id_array.push(results[0].id);
        sendToClients(JSON.stringify({ refresh: true }))
        challenge_array.splice(0, challenge_array.length);
      }
    }
    catch {
      console.log(err);
    }


    if (results.length > 0) {
     //console.log(results[0]);

      const row = results[0];
      sendToClients(JSON.stringify({ refresh: false, robotname: results[0].robotname, robotuser: results[0].robotuser, university: row.etablisement , test:row}));
      
      if (row["disqualification"] === 1) {
        sendToClients(JSON.stringify({ disqualification: true }));


      }
      if (row["disqualification"] === 0 && row.y === 10) {
        sendToClients(JSON.stringify({ disqualification: true }));


      }
      else {
       // console.log(row.Score);
        for (let i = 1; i <= 10; i++) {
          const field = 'ch' + i;
          //console.log(row[field] === 1);
         // console.log(challenge_array)
         // j'ai eliminer (row[field] === 1 && challenge_array.indexOf(field) === -1)
          if (row[field] === 1 ) { 
            sendToClients(JSON.stringify({ robotname: results[0].robotname, robotuser: results[0].robotuser, university: row.etablisement ,id: row.id, changedField: field, [`sensor${i}`]: true,sc:row.Score,position:row.y }));
            challenge_array.push(field);
          }
          if(i===7 && row[field] === 0 && parseInt(row.y, 10)===7 && passage_sensor7===false){
            passage_sensor7=true;
            sendToClients(JSON.stringify({ robotname: results[0].robotname, robotuser: results[0].robotuser, university: row.etablisement ,id: row.id, changedField: field, [`sensor${i}`]: false,sc:row.Score,position:row.y }));


          }
          if(i===10 && row[field] === 0 && parseInt(row.y, 10)===10 && passage_sensor10===false){
            passage_sensor10=true;
            sendToClients(JSON.stringify({ robotname: results[0].robotname, robotuser: results[0].robotuser, university: row.etablisement ,id: row.id, changedField: field, [`sensor${i}`]: false,sc:row.Score,position:row.y }));


          }
        }
       }



    }
  });
};
let id_array = [];
let challenge_array = [];
let passage_sensor7=false;
let passage_sensor10=false;


wss.on('connection', (ws) => {
  console.log('Client connected');
});
setInterval(() => checkChangesAndNotify(challenge_array, id_array), 1000);

