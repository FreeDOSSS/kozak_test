const sequelize = require("./../connect");
const Sequelize = require("sequelize");
const Users = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      //   allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;
