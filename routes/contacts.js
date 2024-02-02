// Mini app inside my program to handle all the routing
const router = require('express').Router(); // http: localhost:3000

const contactsController = require('../controller/contacts');

router.get('/contacts', contactsController.listAllContacts);
router.get('/single/:id', contactsController.singleContact);
router.post('/newContact', contactsController.createNewContact);
router.put('/updateContact/:id', contactsController.updateContact);
router.delete('/deleteContact/:id', contactsController.deleteUser);

module.exports = router;