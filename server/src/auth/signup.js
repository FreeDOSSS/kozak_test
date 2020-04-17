const Users = require("../../db/model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secretKey } = require("./../../config/params");
const hendlerError = require("./../../helpers/hendlerError");

function signup(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ message: "Missing required fields" });
    return;
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) hendlerError("Error create hash signup", err);
    Users.findAll({ where: { email } }).then((data) => {
      if (data.length > 0) {
        res.status(400).json({ message: "Email занят" });
      } else {
        const token = jwt.sign({ email }, secretKey);
        const newUser = {
          email,
          password: hash,
          token: `Bearer ${token}`,
        };

        Users.create(newUser)
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((errSave) => hendlerError("Error save signup", errSave));
      }
    });
  });
}

module.exports = signup;
