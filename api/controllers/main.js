var _               = require('underscore');
var restify         = require('restify');
var restify_router  = require('restify-router').Router;
var router          = new restify_router();

router.get('/', function(req, res, next) {
    res.json({example: "This is the main route."});
});

module.exports = router;