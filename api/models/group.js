import database from '../database';
import User from './user';

var Group = database.Model.extend('Group', {
    tableName: 'groups',
    users: function() {
        return this.belongsToMany('User', 'groups_users');
    }
});

module.exports = Group;
