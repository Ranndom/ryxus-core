import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();;

// Get all statistics of users
router.get('/:group/users', (req, res, next) => {
    next();
});

// Get all statistics of users
router.get('/plugins', (req, res, next) => {
    next();
});

module.exports = router;