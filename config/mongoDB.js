// mongoDB connection
const mongoose = require("mongoose");
const config = require("config");
// get the mongoURI value from json
const mongoDB = config.get("mongoURI");

// async connect
const connectDB = async () => {
  try {
    // give back a promise
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    // exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
