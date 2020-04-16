const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./../../config/params");
const Users = require("./../../db/model/users");

const hendlerError = require("./../../helpers/hendlerError");

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ message: "Email and password requerd field!" });
    return;
  }
  Users.findOne({ where: { email } }).then((userDb) => {
    if (!userDb) return res.status(404).json({ message: "User not find" });
    bcrypt.compare(password, userDb.password, (err, valid) => {
      if (err) throw hendlerError("Check password login.js", err);

      if (!valid)
        return res.status(400).json({ message: "Неверный логин или пароль" });

      const token = jwt.sign({ email }, secretKey, { expiresIn: "60m" });

      Users.update({ token }, { where: { email } })
        .then(() => {
          return res.status(200).json({ token: `Bearer ${token}` });
        })
        .catch((err) => hendlerError("Error update token login.js", err));
    });
  });
}

module.exports = login;
