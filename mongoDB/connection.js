const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

async function connectDB() {

  const URI = process.env.URI;
  const client = new MongoClient(URI);
  console.log(`My URI is ${URI}`);
  console.log(`Client information: ${client}`);

  try {
    await client.connect();
    console.log('It worked!');
  } catch (error) {
    console.error("Hey we are not doing great here.", error);
  }
  return client;
}

module.exports = { connectDB };
