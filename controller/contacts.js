const mongoDB = require("../mongoDB/connection");
const ObjectId = require("mongodb").ObjectId;

const listAllContacts = async (request, response) => {
  /*
    #swagger.description = Display all the Harry Potter Characters
  */
  // Connect to MongoDB
  const client = await mongoDB.connectDB();

  try {
    // Assign collection location
    const collection = client.db("test").collection("contacts");

    // Find all documents in the collection
    const result = collection.find();
    // Turn the documents into an array to display
    const resultArray = await result.toArray();

    // Send the result as a JSON response
    response.json(resultArray);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the connection
    await client.close();
  }
};

const singleContact = async (request, response) => {
  /*
    #swagger.description = Pulling a single Harry Potter Character with their ID
  */
 // Connect to MongoDB
  const client = await mongoDB.connectDB();

  try {
    // Process userId from the URL
    const userId = new ObjectId(request.params.id);

    // Assign collection location
    const collection = client.db("test").collection("contacts");

    // Find the contact using the user id
    const result = collection.find({ _id: userId });
    // Process document as an array
    const resultArray = await result.toArray();

    // Send the result as a JSON response
    response.json(resultArray);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the connection
    await client.close();
  }
};

const createNewContact = async (request, response) => {
  /*
    #swagger.description = Create a new character in the Harry Potter database
  */
  // Connect to MongoDB
  const client = await mongoDB.connectDB();

  // The newContact to insert
  const newContact = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday,
  };

  try {
    // Assign collection location
    const collection = client.db("test").collection("contacts");

    // Insert newContact and return a result
    const result = await collection.insertOne(newContact);

    // Return the result
    console.log(`Inserted contacts with _id: ${result.insertedId}`);
    response.status(201).json(result.insertedId);
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close connection
    await client.close();
  }
};

const updateContact = async (request, response) => {
  /*
    #swagger.description = Update a single Harry Potter Character with their ID
  */
  // Connect to MongoDB
  const client = await mongoDB.connectDB();

  try {
    // Assign collection location to collection
    const collection = client.db("test").collection("contacts");
    // Process the id from the URL
    const userId = new ObjectId(request.params.id);
    
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
    const result = await collection.findOneAndUpdate(filter, update);

    // Send the response
    response.status(204).json("Email updated.");
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
};

const deleteUser = async (request, response) => {
  /*
    #swagger.description = Delete a single Harry Potter Character with their ID
  */
  // Connect to MongoDB
  const client = await mongoDB.connectDB();

  try {
    // Assign collection location to collection
    const collection = client.db("test").collection("contacts");
    // Process the id from the URL
    const userId = new ObjectId(request.params.id);

    // Find the document and delete it
    const result = await collection.deleteOne({ _id: userId });

    // Return the result
    console.log(`Item ${userId} deleted.`);
    response.json(userId);
  } catch (error) {
    console.error("Error: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the connection
    await client.close();
  }
};

module.exports = {
  listAllContacts,
  singleContact,
  createNewContact,
  updateContact,
  deleteUser,
};
