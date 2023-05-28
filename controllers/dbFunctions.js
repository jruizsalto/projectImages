const mongoose = require('mongoose'); // Import Mongoose Library for MongoDB operations

// Function to connect to Mongo
async function connectToDB() {
    console.error('Error al conectar a MongoDB:', error);
    throw new Error(error);
};

// Export function
module.exports = {
    connectToDB
};