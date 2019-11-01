const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

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
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = request.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return response
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Get users gravatar
      const url = gravatar.url(email, {
        s: "200",
        r: "pg", // 限制级
        d: "mm" //default graph
      });

      // initial the user
      user = new User({
        name,
        email,
        url,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save(); //save user to the db

      // Return jsonwebtoken

      response.send("users registered...");
    } catch (error) {
      console.error(error.message);
      response.status(500).send("Server error");
    }
  }
);

module.exports = router;
