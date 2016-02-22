import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();

import models from '../models';

// Get user by ID
router.get('/:id', (req, res, next) => {
    models.User.findById(req.params.id).then((user) => {
        if (user) {
            res.json(user);

            next();
        } else {
            next(new restify.NotFoundError("No user with such ID exists."));
        }
    }).catch((err) => {
        req.log.error(err);
        next(new restify.InternalServerError('Error retrieving user.'));
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
