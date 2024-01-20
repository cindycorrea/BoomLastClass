const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

async function connectDB() {

  // const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@lastclass.ishw9yl.mongodb.net/?retryWrites=true&w=majority`;
  const URI = process.env.URI;
  const client = new MongoClient(URI);

  try {
    await client.connect();
    console.log('Connected to the stupid DB!')
  } catch (e) {
    console.error(e);
  }
  return client;
}

module.exports = { connectDB };
