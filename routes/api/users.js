const express = require("express");
const router = express.Router();

// library to determine whether the request.body is the valid data use the second parameter
const { check, validationResult } = require("express-validator/check");

// @route   POST api/users
// @desc    Register User
// @access  Public

// we need to send schema - name, email, password, date to the server
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 5 or mor characters"
    ).isLength({ min: 5 })
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    // console.log(response.body);
    response.send("users route...");
  }
);

module.exports = router;
