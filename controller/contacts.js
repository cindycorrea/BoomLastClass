const mongoDB = require('../mongoDB/connection');
const ObjectId = require('mongodb').ObjectId;

const listAllContacts = async (request, response) => {
  try {
    const client = await mongoDB.connectDB();
    
    const result = client.db("test").collection("contacts").find();
    const resultArray = await result.toArray();

    // // Log the result to the console
    // console.log(resultArray);

    // // Send the result as a JSON response
    response.json("It should be in the console.");
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  } 
};

const singleContact = async (request, response) => {
  try {
    console.log(request);
    const client = await mongoDB.connectDB();
    const userId = new ObjectId(request.params.id);
    
    const result = client.db("test").collection("contacts").find({ _id: userId });
    const resultArray = await result.toArray();

    // // Log the result to the console
    console.log(resultArray);
    
    // // Send the result as a JSON response
    response.json("A single contact should be in the console.");
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  } 
};

module.exports = { listAllContacts, singleContact }