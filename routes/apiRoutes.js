const functions = require('../controllers/functions'); // Importing the 'functions' module from the controllers directory

// Function to create routes
const createRoutes = (app) => {
    app.post('/task', functions.resizeImage);
    app.get('/task/:taskId', functions.taskStatus);
};

// Export function
module.exports = createRoutes;