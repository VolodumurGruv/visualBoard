const {Sequelize} = require("sequelize");
const sequelize = require('../utils/database');

const todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTENGER
    },
    done: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        
    }
}
   );