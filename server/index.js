require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const router = require("./src/router");
const sequelize = require("./db/connect");

// sequelize.sync({ force: true });
sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();
app.use(logger("dev"));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start, port ${port}`));
