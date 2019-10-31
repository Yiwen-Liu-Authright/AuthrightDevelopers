// express server to run
const express = require("express");
const connectDB = require("./config/mongoDB");

// initialize the app with express
const app = express();

// connect database
connectDB();

// Init Middleware
// => should able to let get data in request.body
app.use(express.json({ extended: false}));

// Test an end point
app.get("/", (request, response) => response.send(`API is running ...`));

// Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/users", require("./routes/api/users"));

// Run on the server port or the local port 7000
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on the Port: ${PORT}`); // call back
});
