const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const URI =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@lastclass.ishw9yl.mongodb.net/test`;

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log("DB has been connected! Boom baby!");
};

module.exports = connectDB;
