const mongoDB = require("../mongoDB/connection");
const ObjectId = require("mongodb").ObjectId;
const Contact = require("../mongoose/contact");
const mongoose = require("mongoose");

const listAllContacts = async (request, response) => {
  /*
    #swagger.description = Display all the Harry Potter Characters
  */

  try {
    // Find all documents in the collection
    const result = await Contact.find();

    // Send the result as a JSON response
    response.json(result);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

const singleContact = async (request, response) => {
  /*
    #swagger.description = Pulling a single Harry Potter Character with their ID
  */

  // Process userId from the URL
  const userId = request.params.id;
  try {
    const contact = await Contact.findById(userId);

    // Send the result as a JSON response
    response.status(201).json(contact);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

const createNewContact = async (request, response) => {
  /*
    #swagger.description = Create a new character in the Harry Potter database
  */

  try {
    console.log("Database connected");

    // The newContact to insert
    const newContact = new Contact({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      favoriteColor: request.body.favoriteColor,
      birthday: request.body.birthday,
    });

    // Save the new Contact to the database
    const savedContact = await newContact.save();
    console.log("New contact saved.");

    // Return the result
    console.log(`Inserted contact with _id: ${savedContact._id}`);
    response.status(201).json(savedContact._id);
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

const updateContact = async (request, response) => {
  /*
    #swagger.description = Update a single Harry Potter Character with their ID
  */

  try {
    // Process the id from the URL
    const userId = request.params.id;

    // Create a filter to find the correct document to update
    const filter = { _id: userId };

    // The new email address
    // const newEmail = "quibbler@gmail.com";
    const update = {
      $set: {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        favoriteColor: request.body.favoriteColor,
        birthday: request.body.birthday,
      },
    };

    // Find the document and update
    const result = await Contact.findOneAndUpdate(filter, update);

    // Send the response
    response.status(204).json("Email updated.");
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (request, response) => {
  /*
    #swagger.description = Delete a single Harry Potter Character with their ID
  */

  try {
    // Process the id from the URL
    const userId = request.params.id;

    // Find the document and delete it
    const result = await Contact.deleteOne({ _id: userId });

    // Return the result
    console.log(`Item ${userId} deleted.`);
    response.json(userId);
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  listAllContacts,
  singleContact,
  createNewContact,
  updateContact,
  deleteUser,
};
