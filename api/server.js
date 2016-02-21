'use strict';

import _ from 'underscore';
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

/*
 * Restify app
*/
var server = restify.createServer({
    name: 'ryxus_api',
    log: log
});

/*
 * Middleware
 */
server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.requestLogger());

server.pre(restify.pre.sanitizePath());

server.on('after', restify.auditLogger({log: log}));

// Automatically includes routes.
_.each(routes, (route, route_name) => {
    // Check if the controller exports a restify router.
    if (typeof route.applyRoutes == 'function') {

        // Check if the controller has a prefix set (eg. '/users')
        // if not, set the mount point using the name of the controller.
        //
        // The prefix is set to the filename of the controller with all underscores replaced with slashes, by default
        // (eg. controllers/users.js will route to /users,
        //      controllers/pages_home.js will route to /pages/home)

        var prefix;

        if (route.prefix !== undefined) {
            prefix = route.prefix;
        } else {
            prefix = route_name.replace(/_/, '/');
            if (!prefix.startsWith("/")) {
                prefix = "/" +  prefix;
            }
        }

        route.applyRoutes(server, prefix);
        log.info("Mounted controller", route_name, "to", prefix);
    }
});

/*
 * Server startup
 */
server.listen(config.api.port || 3000, function() {
    log.info("%s listening at %s", server.name, server.url);
});
