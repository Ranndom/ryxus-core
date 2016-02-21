var _ = require('underscore');
var restify = require('restify');
var restify_router = require('restify-router').Router;
var router = new restify_router();

// Get user by ID
router.get('/:id', (req, res, next) => {
    next();
});

// Update user by ID
router.post('/:id', (req, res, next) => {
    next();
});

// Create user
router.post('/new', (req, res, next) => {
    next();
});

// Delete user by ID
router.post('/delete/:id', (req, res, next) => {
    next();
});

module.exports = router;