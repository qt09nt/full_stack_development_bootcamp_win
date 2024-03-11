//import the sequelize model and store it in a constant

const Sequelize = require('sequelize');

const sequelize = new Sequelize('robo_garden', 'robo', '123456', {
    host: 'localhost',
    port: 3360, 
    dialect:'mariadb'});

module.exports = sequelize;
