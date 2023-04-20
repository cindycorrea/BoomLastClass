var express = require('express');
var app = express();

// Run on Render's provided port OR
// port 3000 on my localhost
const port = process.env.PORT || 3000;

// import routes 
app.use('/', require('./routes'));

// Establish a connection to the port to watch for changes
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 