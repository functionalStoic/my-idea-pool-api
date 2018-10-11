exports.up = ({ schema }) =>
    schema
        .createTable('users', table => {
            table.increments().primary();
            table.string('email').unique();
            table.string('name');
            table.string('password');
            table.string('refresh_token');
        })
        .createTable('ideas', table => {
            table.increments().primary();
            table
                .integer('user_id')
                .references('id')
                .inTable('users')
                .onDelete('SET NULL');
            table.string('content');
            table.integer('impact');
            table.integer('confidence');
            table.integer('ease');
        });

exports.down = ({ schema }) => schema.dropTable('ideas').dropTable('users');
