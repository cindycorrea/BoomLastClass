const mongoose = require('mongoose');

const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegex
    },
    favoriteColor: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    }
})

const collectionName = 'contacts';

const Contact = mongoose.model('Contact', contactSchema, collectionName)

module.exports = Contact;