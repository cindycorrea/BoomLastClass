// Express is a framework to run a node.js API on
const express = require('express');

// start express
const app = express();

// get the information in the MongoDB connection file
const connectDB = require('./mongoDBconnection/connection');

// Connect to the MongoDB database
connectDB();

app.use('/api/userModel', require('./API/User'));

// Run on Render's provided port OR
// port 3000 on my localhost
const port = process.env.PORT || 3000;

// import routes mini application
app.use('/', require('./routes/index'));

// Establish a connection to the port nodemon watches for changes
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

