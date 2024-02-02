const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts',
    description: 'Contact information for some of my favorite Harry Potter characters.'
  },
  host: 'boomlastclass-project.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);