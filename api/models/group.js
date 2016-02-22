'use strict';

module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.Group.belongsToMany(models.User, { through: 'UserGroup' });
            }
        },
        tableName: 'groups'
    });
    
    return Group;
};