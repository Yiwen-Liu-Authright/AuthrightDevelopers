const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Test
// @access  Public
router.get('/', (request, response) => response.send('users route...'));

module.exports = router;