const router = require('express').Router();

// Import records controller
const controller = require('./searchController');

// Handle Request
router.post('/search', controller.search);

module.exports = router;
