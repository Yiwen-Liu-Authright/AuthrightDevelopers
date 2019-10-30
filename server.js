// express server to run
const express = require("express");
const connectDB = require("./config/mongoDB");

// initialize the app with express
const app = express();

// connect database
connectDB();

// Test an end point
app.get("/", (request, response) => response.send(`API is running ...`));
// Run on the server port or the local port 7000
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on the Port: ${PORT}`); // call back
});
