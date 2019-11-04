const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
// @route   GET api/auth
// @desc    Test
// @access  Public
router.get("/", auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.id).select("-password");
    response.json(user);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error");
  }
});

module.exports = router;
