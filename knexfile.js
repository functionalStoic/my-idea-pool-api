module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            database: 'my_idea_pool_development',
            user: null,
            password: null
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        useNullAsDefault: true
    }
    // staging: {
    //     client: 'postgresql',
    //     connection: {
    //         database: 'shipcertain',
    //         user: 'username',
    //         password: 'password'
    //     },
    //     pool: {
    //         min: 2,
    //         max: 10
    //     },
    //     migrations: {
    //         tableName: 'knex_migrations'
    //     }
    // },

    // production: {
    //     client: 'postgresql',
    //     connection: {
    //         database: 'shipcertain',
    //         user: 'username',
    //         password: 'password'
    //     },
    //     pool: {
    //         min: 2,
    //         max: 10
    //     },
    //     migrations: {
    //         tableName: 'knex_migrations'
    //     }
    // }
};
