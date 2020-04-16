const Workers = require("./../../db/model/workers");
const hendlerError = require("./../../helpers/hendlerError");

function deleteWorkers(req, res) {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ message: "You needed send id in query" });
  Workers.destroy({ where: { id: Number(id) } })
    .then((data) =>
      data
        ? res.status(200).json({ message: "Deleted!" })
        : res.status(404).json({ message: "Not deleted" })
    )
    .catch((err) => hendlerError("Error delete worker deleteWorker.js", err));
}

module.exports = deleteWorkers;
