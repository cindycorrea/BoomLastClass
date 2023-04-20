const routes = require('express').Router();

// Import all files from controllers
const myController = require('../controllers'); 

// Utilize individual functions from the
// controllers files
routes.get('/', myController.knownPerson);
routes.get('/list', myController.listOfMyFavoritePeople);

// Export this file to be used by the server.js file
module.exports = routes;