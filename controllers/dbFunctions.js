const mongoose = require('mongoose'); // Import Mongoose Library for MongoDB operations
const schemas = require('../database/schemas') // Import schemas for MongoDB database

// URL connection to remote database
const url = 'mongodb+srv://admin:admin@cluster0.wgkcqff.mongodb.net/proyectImages?retryWrites=true&w=majority';

// Function to connect to MongoDB
async function connectToDB() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error(error);
    };
};

// Function to save Images to the database
async function saveImages(data) {
    try {
        const document = new schemas.Images(data);
        const savedDocument = await document.save();
        //console.log('Saved document:', savedDocument);
    } catch (error) {
        console.error('Error saving image:', error);
        throw new Error(error);
    };
};

// Function to save Tasks to the database
async function saveTasks(data) {
    try {
        const document = new schemas.Tasks(data);
        const savedDocument = await document.save();
        return savedDocument;
    } catch (error) {
        console.error('Error saving task:', error);
        throw new Error(error);
    };
};

// Function to get a task from the database
async function getTask(id) {
    try {
        connectToDB();

        const documentTask = await schemas.Tasks.findById(id);
        const documentsImage = await schemas.Images.find({ 'task': id });

        let taskInfo = { task: documentTask, images: documentsImage };

        return taskInfo;
        //console.log('Found documents:', documents);
    } catch (error) {
        console.error('Error getting documents:', error);
        throw new Error(error);
    }
}
// Function to update a task from the database
async function updateTask(id) {
    try {
        connectToDB();
        await schemas.Tasks.findByIdAndUpdate(id, { $currentDate: { updateTimestamp: true } });
    } catch (error) {
        console.error('Error updating task:', error);
        throw new Error(error);
    };
};

// Export functions
module.exports = {
    connectToDB, 
    saveImages, 
    saveTasks, 
    getTask, 
    updateTask 
};
