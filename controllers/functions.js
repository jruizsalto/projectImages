const multer = require('multer');  // Importing the Multer library for handling file uploads
const sharp = require('sharp'); //Importing the Sharp Library for resize images
const fs = require('fs');  // Importing the fs module for file system operations
const path = require('path');  // Importing the Path module for working with file paths
const crypto = require('crypto'); // Importing Crypto library for create md5 
const dbFunctions = require('./dbFunctions'); // Importing functios for database operations

// Function that receives the request to resize the image
const resizeImage = async (req, res) => {
    try {
        dbFunctions.connectToDB();
        // Create data for saving task an call to the function to save
        const taskData = {
            resourcePath: req.url
        };
        const savedTask = await dbFunctions.saveTasks(taskData);
        const task = savedTask._id;
        // Executing image resizing for two different widths
        executeResize(req, res, 1024, task);
        executeResize(req, res, 800, task);
        // Update the task with current date
        await dbFunctions.updateTask(task);

        res.status(200).send('Imagen escalada, tarea con ID: ' + task);

    } catch (e) {
        console.error('Error ' + e);
        res.status(500).send('Error ' + e);
    }
};

// Resizing the image using the 'Sharp' library
function executeResize(req, res, width, task) {
    // Multer configuration
    const storage = multer.memoryStorage();
    const upload = multer({ storage: multer.memoryStorage() }).single('img');
    // Function to upload the image and resize it
    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            throw new Error(err);
        } else {
            const file = req.file;
            const originalName = req.file.originalname;
            const folderName = path.parse(originalName).name;
            const extension = path.extname(originalName);
            const destination = './output/' + folderName + '/' + width + '/';

            // Checking if the destination folder exists, and creating it if it doesn't
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination, { recursive: true });
            };
            // Resize image
            const resizedImage = sharp(file.buffer).resize(width, null, {
                fit: 'contain',
                background: '#FFF',
                withoutEnlargement: true
            }).toBuffer(destination, (err, buffer, info) => {
                if (err) {
                    console.error(err);
                    throw new Error(err);
                } else {
                    const md5sum = crypto.createHash('md5');
                    md5sum.update(buffer);
                    const md5 = md5sum.digest('hex');

                    const outputFile = destination + md5 + extension;
                    // Saving the modified image with the MD5 name
                    fs.writeFileSync(outputFile, buffer);
                    // Create data to save image and save
                    const imageData = {
                        md5: md5,
                        width: width,
                        binaryPath: destination,
                        task: task
                    };
                    dbFunctions.saveImages(imageData);
                }
            });
        }
    });
};
// Function to return the status of a task
const taskStatus = async (req, res) => {
    try {
        const document = await dbFunctions.getTask(req.params.taskId);
        res.status(200).json({ document: document });
    } catch (error) {
        res.status(500).send('Error: ' + error);
    };
};

module.exports = {
    resizeImage,
    taskStatus
};