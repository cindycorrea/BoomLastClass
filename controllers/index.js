
function awesomeFunction(req, res, next) {
    res.json('Cindy Correa');
};

function listAwesomePeople(req, res, next) {
    res.json('These are some awesome people: me, you, and your mom.');
};

module.exports = { awesomeFunction, listAwesomePeople };