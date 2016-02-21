'use strict';

import mysql from 'mysql';
import bunyan from 'bunyan';
import config from '../config/config.json';

const connection = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db
});

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
 * Connect to the MySQL database using
 * credentials from the configuration.
 */
connection.connect((err) => {
    if (err) {
        log.error({error: err}, 'Error connecting to database.');
        return;
    }

    log.info('MySQL connected with thread id', connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;

    log.info('The solution is:', rows[0].solution);
});

connection.end();