'use strict';

module.exports = {
    
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users_groups', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            groupId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users_groups');
    }
    
};