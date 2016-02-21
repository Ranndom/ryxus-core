import database from '../database';
import Group from './group';

var User = database.Model.extend('User', {
    tableName: 'users',
    groups: function() {
        return this.belongsToMany('Group', 'groups_users');
    }
});

module.exports = User;
