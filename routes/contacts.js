// Mini app inside my program to handle all the routing
const router = require('express').Router(); // http: localhost:3000

const contactsController = require('../controller/contacts');

router.get('/contacts', contactsController.listAllContacts);
router.get('/contacts/:id', contactsController.singleContact);
router.post('/contacts', contactsController.createNewContact);
router.put('/contacts/:id', contactsController.updateContact);
router.delete('/contacts/:id', contactsController.deleteUser);

module.exports = router;