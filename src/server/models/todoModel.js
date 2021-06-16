const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const todo = sequelize.define("Todo", {
  uid: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  done: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = todo;
