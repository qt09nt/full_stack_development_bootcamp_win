const mariadb = require('mariadb');


const pool = mariadb.createPool({
    host: 'dpg-copdls5jm4es73a2i70g-a',
    user: 'database_example_5tf7_user',
    password: '78tfkNnsQwHbTKjMIKj64drYi7cqywfC',
    
});

module.exports = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ghostsoap',
    database: 'robogarden',
    port: 3360
});