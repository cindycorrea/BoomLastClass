
function knownPerson(req, res, next) {
    res.json('Mario Correa is my amazing husband!');
};

function listOfMyFavoritePeople(req, res, next) {
    res.json('My favorite people are: My husband, Mario (my son), Hannah and Chloe (my daughters), Bellatrix and Charlie (my cats).');
};

module.exports = { knownPerson, listOfMyFavoritePeople };