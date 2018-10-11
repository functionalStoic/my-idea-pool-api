const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: null,
        password: null,
        charset: 'utf8'
    }
});

knex.raw('CREATE DATABASE my_idea_pool_development').then(() => knex.destroy());
