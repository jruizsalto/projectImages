const express = require('express');  // Importing the Express framework
const multer = require('multer');  // Importing the Multer library for handling file uploads

const app = express();  // Creating an Express application
const port = 5000;  // Setting the port number for the server

const upload = multer({ dest: 'uploads/' });  // Creating a Multer middleware for file upload

// Route for handling the POST request for '/task'
app.post('/task', upload.single('img'), function (req, res) {
    const file = req.file;  // Accessing the uploaded file
    console.log(file);
    res.send('Post');  // Sending a response of 'Post'
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log('APP running on port: ' + port);  // Logging a message indicating the server is running
});
