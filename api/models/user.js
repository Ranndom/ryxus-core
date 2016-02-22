'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.User.belongsToMany(models.Group, { through: 'UserGroup' });
            }
        },
        tableName: 'users'
    });
    
    return User;
};