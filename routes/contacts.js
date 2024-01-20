// Mini app inside my program to handle all the routing
const router = require('express').Router(); // http: localhost:3000

const contactsController = require('../controller/contacts')

router.get('/', contactsController.listAllContacts);
router.get('/single/:id', contactsController.singleContact);

module.exports = router;