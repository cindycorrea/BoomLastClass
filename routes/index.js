
// Mini app inside my program to handle all the routing
const router = require('express').Router();

// Import all files from controllers
const controller = require('../controller/index'); 

// Utilize individual functions from the
// controllers folder
router.get('/', controller.knownPerson);
router.get('/list', controller.listOfMyFavoritePeople);
router.get('/test', controller.testConnection);
router.get('/api/userModel', controller.apiController);

// Export this file to be used by the server.js file
module.exports = router;