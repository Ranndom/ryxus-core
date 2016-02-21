import _ from 'underscore';
import restify from 'restify';
import { Router } from 'restify-router';
const router = new Router();

import database from '../database';
import Group from '../models/group'

// Get users from specified group
router.get('/:group/users', (req, res, next) => {
    next();
});

// Get group by ID
router.get('/:id', (req, res, next) => {
    new Group({id: req.params.id}).fetch().then((group) => {
        if (group) {
            res.json(group.pick(
                ['id', 'name']
            ));

            next();
        } else {
            next(new restify.NotFoundError('No group with such ID exists.'));
        }
    }).catch((err) => {
        req.log.error(err);

        next(new restify.InternalServerError('Error retrieving group.'));
    });
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