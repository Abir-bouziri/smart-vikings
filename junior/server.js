const express = require('express');
const db=require('./affiche');
const app = express();
const PORT = 4000; // Change this to the port number you want to use
app.use(express.static('C:/Users/bouzi/Downloads/junior/photo'));
// Define a route handler for the root path
app.get('/junior', (req, res) => {
  res.sendFile('C:/Users/bouzi/Downloads/junior/photo/html.html');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
