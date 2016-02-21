
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments();
        table.string('name');
        table.string('first_name');
        table.string('last_name');
        table.string('password');
    })
    .createTable('groups', (table) => {
        table.increments();
        table.string('name');
    })
    .createTable('groups_users', (table) => {
        table.integer('group_id').references('groups.id');
        table.integer('user_id').references('users.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('users')
    .dropTable('groups')
    .dropTable('groups_users');
};
