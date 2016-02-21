'use strict';

import mysql from 'mysql';
import config from '../config/config.json';

const connection = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    
    console.log('The solution is: ', rows[0].solution);
});

connection.end();