const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./../../config/params");
const Users = require("./../../db/model/users");

const hendlerError = require("./../../helpers/hendlerError");

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and password requerd field!" });
  }

  Users.findOne({ where: { email } }).then((userDb) => {
    // if (!userDb) return res.status(404).json({ message: "User not find" });
    if (userDb) {
      //   jwt.verify(token, secretKey, function (err, decoded) {
      //     console.log("err", err);
      //     console.log(decoded.foo); // bar
      //   });
      bcrypt.compare(password, userDb.password, (err, valid) => {
        if (err) throw hendlerError("Check password login.js", err);

        if (!valid)
          return res.status(400).json({ message: "Неверный логин или пароль" });

        const accessToken = jwt.sign({ email }, secretKey, { expiresIn: "1m" });
        const refreshToken = jwt.sign({ email }, secretKey, {
          expiresIn: "1d",
        });

        Users.update({ token }, { where: { email } })
          .then(() => {
            return res.status(200).json({
              accessToken: `Bearer ${accessToken}`,
              refreshToken: `Bearer ${refreshToken}`,
            });
          })
          .catch((err) => hendlerError("Error update token login.js", err));
      });
    }
  });
}

module.exports = login;
