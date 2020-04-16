const sequelize = require("./../connect");
const Sequelize = require("sequelize");

const Workers = sequelize.define(
  "workers",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fullName: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.STRING,
    },
    salary: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Workers;
