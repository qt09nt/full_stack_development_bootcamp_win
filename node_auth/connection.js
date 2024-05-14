const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ghostsoap',
    database: 'robogarden',
    port: 3360
});

module.exports = pool;