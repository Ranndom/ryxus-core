import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();

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