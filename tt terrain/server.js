const express = require('express');
const db=require('./affiche');
const app = express();
const PORT = 3000; // Change this to the port number you want to use
app.use(express.static('C:/Users/bouzi/Downloads/tt terrain/photo'));
// Define a route handler for the root path
app.get('/affichett', (req, res) => {
  res.sendFile('C:/Users/bouzi/Downloads/tt terrain/photo/html.html');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
