import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();

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