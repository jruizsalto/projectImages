const express = require('express'); // Importing the Express framework
const api = require('./routes/apiRoutes'); // Importing routes
const app = express(); // Creating Express application
const port = 5000; // Setting the port number for the server

// Configure API routes
api(app);

// Start the server
app.listen(port, () => {
    console.log('APP running on port: ' + port);
});