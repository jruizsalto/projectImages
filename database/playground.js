/* global use, db */
// MongoDB Playground

// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

//find images by task id
db.images.find({ 'task': '647314ad46834ce0febb66b4' });

//Initialize database
db.tasks.deleteMany({});
db.images.deleteMany({});