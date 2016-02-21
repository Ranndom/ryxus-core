import database from '../database';

var Group = database.Model.extend({
    tableName: 'groups'
});

module.exports = Group;
