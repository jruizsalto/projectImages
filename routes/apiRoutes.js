const functions = require('../controllers/functions'); // Importing the 'functions' module from the controllers directory

// Function to create routes
const createRoutes = (app) => {
    app.post('/task', functions.resizeImage); // Route for image processing
    app.get('/task/:taskId', functions.taskStatus); // Route that will return the processing status
};

// Export function
module.exports = createRoutes;