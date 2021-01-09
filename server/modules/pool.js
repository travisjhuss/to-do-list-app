const pg = require('pg');

// set database settings to config
const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
}

// set config to pool
const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Connected to postgres');
});

pool.on('error', () => {
    console.log(error);
});

// exporting pool
module.exports = pool;

