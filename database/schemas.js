const mongoose = require('mongoose'); // Import Mongoose Library for MongoDB operations

// Define the schema for Images model
const imageSchema = new mongoose.Schema({
    creationTimestamp: { type: Date, default: Date.now },
    md5: { type: String, required: true },
    width: { type: Number, required: true },
    binaryPath: { type: String, required: true },
    task: { type: String, required: true }
});

// Define the schema for Tasks model
const taskSchema = new mongoose.Schema({
    creationTimestamp: { type: Date, default: Date.now },
    updateTimestamp: { type: Date, default: Date.now },
    resourcePath: { type: String, required: true }
});

// Create models based on the defined schemas
const Images = mongoose.model('Images', imageSchema);
const Tasks = mongoose.model('Tasks', taskSchema);

// Export the models
module.exports = {
    Images,
    Tasks
};
