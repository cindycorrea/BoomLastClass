const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

async function connectDB() {

  const URI = process.env.URI;
  const client = new MongoClient(URI);

  try {
    await client.connect();
  } catch (error) {
    console.error("There was an error", error);
  }
  return client;
}

module.exports = { connectDB };
