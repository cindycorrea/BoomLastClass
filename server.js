// Express is a framework to run a node.js API on
const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();

// start express
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// get the information in the MongoDB connection file
const mongoDB = require('./mongoDB/connection');

// Run on Render's provided port OR
// port 3000 on my localhost
const port = process.env.PORT || 3000;

// import routes mini application
// app.use('/', require('./routes'));
app.use(bodyParser.json())
app.use('/', require('./routes/contacts'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Establish a connection to the port nodemon watches for changes
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

