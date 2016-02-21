'use strict';

import restify from 'restify';
import bunyan from 'bunyan';
import requireDir from 'require-dir';
import config from '../config/config.json';

const routes = requireDir('controllers');

var log = bunyan.createLogger({
    name: 'ryxus_api',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

// Restify app
var server = restify.createServer({
    name: 'ryxus_api',
    log: log
});

// Middleware
server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.requestLogger());

server.pre(restify.pre.sanitizePath());

server.on('after', restify.auditLogger({log: log}));

import User from './models/user';
import Group from './models/group';

// Routes
routes.main.applyRoutes(server);
routes.users.applyRoutes(server, 'users');
routes.groups.applyRoutes(server, 'groups');
routes.statistics.applyRoutes(server, 'statistics');

// Server startup
server.listen(config.api.port || 3000, function() {
    log.info("%s listening at %s", server.name, server.url);
});
