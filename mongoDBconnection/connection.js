const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const URI =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@lastclass.ishw9yl.mongodb.net`;

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log("Wow, I actually did it! MongoDB connected!");
};

module.exports = connectDB;
