// Function to list a known person in my life
function knownPerson(req, res, next) {
    res.json('Mario Correa is my amazing husband!');
};

// Function to list my favorite people
function listOfMyFavoritePeople(req, res, next) {
    res.json('My favorite people are: My husband, Mario (my son), Hannah and Chloe (my daughters), Bellatrix and Charlie (my cats).');
};

// Export the file to be used elsewhere
module.exports = { knownPerson, listOfMyFavoritePeople };