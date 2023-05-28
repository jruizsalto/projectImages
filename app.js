const express = require('express');  // Importing the Express framework
const multer = require('multer');  // Importing the Multer library for handling file uploads
const sharp = require('sharp'); //Importing the Sharp Library for resize images
const fs = require('fs');  // Importing the fs module for file system operations
const path = require('path');  // Importing the path module for working with file paths

const app = express();  // Creating an Express application
const port = 5000;  // Setting the port number for the server
// Configuring Multer to use 'multer.memoryStorage()' as the storage engine
const upload = multer({ storage: multer.memoryStorage() });

// Post route for the 'task' request
app.post('/task', upload.single('img'), async function (req, res) {
    const file = req.file;
    const originalName = req.file.originalname;
    const folderName = path.parse(originalName).name;
    const extension = path.extname(originalName);
    const destination = './output/' + folderName;

    // Checking if the destination folder exists, and creating it if it doesn't
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    };

    // Resizing the image using the 'Sharp' library
    const resizedImage = sharp(file.buffer).resize(1024, null, {
        fit: 'contain',
        background: '#FFF',
        withoutEnlargement: true
    }).toFile(destination + '/' + originalName + extension, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Imagen modificada guardada correctamente:', info);
        }
    });

    // Converting the resized image to a Buffer
    const resizedImageBuffer = await resizedImage.toBuffer();
    console.log(resizedImageBuffer);
    res.send({ resizedImage: resizedImageBuffer });
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log('APP running on port: ' + port);
});