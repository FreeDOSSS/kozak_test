const Workers = require("./../../db/model/workers");
const hendlerError = require("./../../helpers/hendlerError");

function updateWorkers(req, res) {
  const { body } = req;
  const { id } = body;

  if (!id) return res.status(404).json({ message: "You needed send id" });

  delete body.id;

  Workers.update({ ...body }, { where: { id } })
    .then((data) =>
      data
        ? res.status(200).json({ message: "Update successfully" })
        : res.status(400).json({ message: "Error update" })
    )
    .catch((err) => hendlerError("Error update workers updateWorker.js", err));
}

module.exports = updateWorkers;
