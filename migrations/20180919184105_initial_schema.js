exports.up = ({ schema }) =>
    schema
        .createTable('users', table => {
            table.increments('id').primary();
            table.string('email').unique();
            table.string('name');
            table.string('password');
        })
        .createTable('ideas', table => {
            table.increments('id').primary();
            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL');
            table.string('content');
            table.integer('impact');
            table.integer('confidence');
            table.integer('ease');
            table.float('average_score');
        })
        .createTable('tokens', table => {
            table.increments('id').primary();
            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL');
            table.uuid('uuid');
            table.string('token');
        });

exports.down = ({ schema }) =>
    schema
        .dropTable('users')
        .dropTable('ideas')
        .dropTable('tokens');
