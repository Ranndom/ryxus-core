'use strict';

module.exports = function(sequelize, DataTypes) {
    var UserGroup = sequelize.define('UserGroup', {
        userId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
            }
        },
        tableName: 'users_groups'
    });
    
    return UserGroup;
};