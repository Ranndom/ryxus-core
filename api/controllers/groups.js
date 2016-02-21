var _ = require('underscore');
var restify = require('restify');
var restify_router = require('restify-router').Router;
var router = new restify_router();

// Get users from specified group
router.get('/:group/users', (req, res, next) => {
    next();
});

// Get group by ID
router.get('/:id', (req, res, next) => {
    next();
});

// Update group by ID
router.post('/:id', (req, res, next) => {
    next();
});

// Create group
router.post('/new', (req, res, next) => {
    next();
});

// Delete group by ID
router.post('/delete/:id', (req, res, next) => {
    next();
});

module.exports = router;