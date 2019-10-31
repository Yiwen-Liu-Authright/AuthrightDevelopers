const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test
// @access  Public
router.get('/', (request, response) => response.send('posts route...'));

module.exports = router;