const mongoose = require("mongoose");

const URI =
  "mongodb+srv://cindycorrea:ThisIsAPassword@lastclass.ishw9yl.mongodb.net/test";

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log("DB has been connected! Boom baby!");
};

module.exports = connectDB;
