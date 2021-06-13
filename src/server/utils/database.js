const Sequelize = require ("sequelize");
const DB_PASS = process.env.DB_PASS;

const sequelize = new Sequelize('todos', 'root', 'XfAR4-Xn.nP', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;