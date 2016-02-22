'use strict';

import mysql from 'mysql';
import bunyan from 'bunyan';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.json';

/**
 * Create the database logger.
 */
const log = bunyan.createLogger({
    name: 'ryxus_database',
    level: process.env.LOG_LEVEL || 'debug',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

/**
 * Sequelize setup.
 */
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];
envConfig['logging'] = log.debug.bind(log);

var database = (
    config.use_env_variable ?
        new Sequelize(process.env[envConfig.use_env_variable]) :
        new Sequelize(envConfig.database, envConfig.username, null, envConfig)
);

database.authenticate().catch((err) => {
    log.error(err);
});

module.exports = database;
