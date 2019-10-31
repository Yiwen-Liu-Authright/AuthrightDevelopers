const express = require('express');
const router = express.Router();

// @route   GET api/portfile
// @desc    Test
// @access  Public
router.get('/', (request, response) => response.send('profiles route...'));

module.exports = router;