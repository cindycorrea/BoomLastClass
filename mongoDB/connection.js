const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

async function connectDB() {
  const URI = process.env.URI;
  const client = new MongoClient(URI);

  try {
    await client.connect();
    
  } catch (error) {
    console.error("Hey we are not doing great here.", error);
  }
  return client;
}

module.exports = { connectDB };
