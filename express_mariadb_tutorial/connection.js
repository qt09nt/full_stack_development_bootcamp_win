const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'robogarden',
    port: 3360
});

const pool = mariadb.createPool({


})
module.exports = pool;