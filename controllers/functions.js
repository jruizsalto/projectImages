const express = require('express');  // Importing the Express framework
const multer = require('multer');  // Importing the Multer library for handling file uploads
const sharp = require('sharp'); //Importing the Sharp Library for resize images
const fs = require('fs');  // Importing the fs module for file system operations
const path = require('path');  // Importing the path module for working with file paths

const resizeImage = async (req, res) => {
    console.log('resizeImage');
    res.status(200).send('resizeImage');
};

const taskStatus = async (req, res) => {
    console.log('taskStatus');
    res.status(200).send('taskStatus');
};

module.exports = {
    resizeImage,
    taskStatus
};