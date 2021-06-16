if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const Sequelize = require("sequelize");
const DB_PASS = process.env.DB_PASS;
console.log(DB_PASS);
const sequelize = new Sequelize("todo", "root", DB_PASS, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
