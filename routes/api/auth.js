const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test
// @access  Public
router.get('/', (request, response) => response.send('auth route...'));

module.exports = router;