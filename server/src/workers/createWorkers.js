const Workers = require("./../../db/model/workers");
const hendlerWorker = require("./../../helpers/hendlerError");

function createWorker(req, res) {
  const { fullName, gender, contact, dob, salary, status } = req.body;
  if (!fullName || !gender || !contact || !dob || !salary || !status)
    return res.status(200).json({ message: "Check requerid fields" });

  const user = {
    fullName: fullName.toLowerCase(),
    gender,
    contact,
    dob,
    status,
    salary: Number(salary.replace(/\s/g, "")),
  };

  Workers.create(user)
    .then((newWorker) => {
      return res.status(200).json(newWorker);
    })
    .catch((err) => hendlerWorker("Error create new user", err));
}

module.exports = createWorker;
