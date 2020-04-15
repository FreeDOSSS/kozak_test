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
      type: Sequelize.STRING(1234),
      //   allowNull: false,
    },
    password: {
      type: Sequelize.STRING(1234),
    },
    token: {
      type: Sequelize.STRING(1234),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;
