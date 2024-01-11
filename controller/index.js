
// Function to list a known person in my life
function knownPerson(req, res) {
    res.json('Mario Correa is my amazing husband!');
};

// Function to list my favorite people
function listOfMyFavoritePeople(req, res) {
    res.json('My favorite people are: My husband, Mario (my son), Hannah and Chloe (my daughters), Bellatrix and Charlie (my cats).');
};

function testConnection(req, res) {
    res.json('This is just a connection test.')
};

function apiController(req, res) {
    res.json('This an API test.')
};

// Export the file to be used elsewhere
module.exports = { knownPerson, listOfMyFavoritePeople, testConnection, apiController };