const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const test= require('./test1');
const router=require('./crud.js');
const a = require('./affiche.js');
const ch= require('./app.js');
const c=require('./test mqtt/server.js')

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('C:/Users/bouzi/Documents/maker/public'));
app.use(express.static('C:/Users/bouzi/Documents/maker/test crud'));
app.use(express.static('C:/Users/bouzi/Documents/maker/photo'));
app.use(express.static('C:/Users/bouzi/Documents/maker/views'));
app.use(express.static('C:/Users/bouzi/Documents/maker/testchallenge'));
app.get('/test', function(req, res) {
    res.sendFile("C:/Users/bouzi/Documents/maker/public/html.html");
  });
  app.get('/challenge', function(req, res) {
    res.sendFile("C:/Users/bouzi/Documents/maker/testchallenge/index.html");
  });

app.get('/crud', function(req, res) {
    res.sendFile("C:/Users/bouzi/Documents/maker/test crud/test2.html");
  });
app.post('/ajout',router.ajout);
app.post('/update',router.update);
app.get('/affiche',function(req, res) {
  res.sendFile("C:/Users/bouzi/Documents/maker/photo/html.html");
});
app.get('/data',router.state);
app.set('view engine', 'ejs');
const server =app.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
});