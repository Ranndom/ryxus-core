'use strict';

import mysql from 'mysql';
import bunyan from 'bunyan';
import config from '../config/config.json';
import knexfile from '../knexfile';

import knex from 'knex';
import bookshelf from 'bookshelf';

/**
 * Create the database logger.
 */
const log = bunyan.createLogger({
    name: 'ryxus_database',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

/**
 * Create the Bookshelf instance.
 */
const database = bookshelf(knex(
    knexfile[process.env.environment || 'development']
));

database.plugin('registry');

module.exports = database;
