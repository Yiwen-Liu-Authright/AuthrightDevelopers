// express server to run
const express = require("express");

// initialize the app with express
const app = express();

// Test an end point
app.get("/", (request, response) => response.send(`API is running ...`));
// Run on the server port or the local port 7000
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on the Port: ${PORT}`); // call back
});
