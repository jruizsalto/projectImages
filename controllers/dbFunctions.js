const mongoose = require('mongoose');

async function connectToDB() {
    console.error('Error al conectar a MongoDB:', error);
    throw new Error(error);

};

module.exports = {
    connectToDB
};