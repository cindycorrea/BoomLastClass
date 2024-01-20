
// Mini app inside my program to handle all the routing
const router = require('express').Router();

// Import all files from controllers
const controller = require('../controller/index'); 

// Utilize individual functions from the
// controllers folder
// express router functionality variable.get('the route', 
// controller is a reference to the controller index file.the function to use)
router.get('/', controller.knownPerson);

// Export this file to be used by the server.js file
// module.exports = router;