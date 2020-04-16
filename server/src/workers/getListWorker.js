const Workers = require("./../../db/model/workers");
const { Op } = require("sequelize");

function getListWorkers(req, res) {
  const limit = Number(req.query.limit) || 5;
  const page = Number(req.query.page) - 1 || 0;
  const fullName = req.query.fullName || null;

  let where = {};

  if (fullName)
    where = {
      fullName: {
        [Op.substring]: fullName,
      },
    };

  Workers.findAndCountAll({
    where,
    limit,
    offset: limit * page,
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log("err", err));
}

module.exports = getListWorkers;
