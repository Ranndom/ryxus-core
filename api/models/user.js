import database from '../database';

var User = database.Model.extend({
    tableName: 'users'
});

module.exports = User;
