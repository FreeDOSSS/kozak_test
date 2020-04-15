const Sequelize = require("sequelize"); //Подключаем библиотеку
const config = {
  username: "root",
  password: null, // Для sqlite пароль не обязателен
  database: "test_db", // Имя базы данных
  host: "127.0.0.1", // Адрес субд, для sqlite всегда локалхост
  dialect: "sqlite", // Говорим, какую СУБД будем юзать
  dialectOptions: {
    multipleStatements: true,
  },
  logging: console.log, // Включаем логи запросов, нужно передать именно функцию, либо false
  storage: "./test_db.db", // Путь к файлу БД
  operatorsAliases: Sequelize.Op, // Передаём алиасы параметров (дальше покажу нафига)
};

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./test_db.db",
});

// const sequelize = new Sequelize(config); // Создаём подключение

module.exports = sequelize;
