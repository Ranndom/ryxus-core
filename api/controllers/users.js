import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();

import database from '../database';
import User from '../models/user';

// Get user by ID
router.get('/:id', (req, res, next) => {
    new User({id: req.params.id}).fetch().then((user) => {
        if (user) {
            res.json(user);
            
            next();
        } else {
            next(new restify.NotFoundError("No user with such ID exists."));
        }
    }).catch((err) => {
        req.log.error(err);
        res.json({error: "AHHHHH"});
        next();
    });
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