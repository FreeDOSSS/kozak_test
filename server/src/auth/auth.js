const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  secretKey_access,
  secretKey_refresh,
} = require("./../../config/params");
const Users = require("./../../db/model/users");

const hendlerError = require("./../../helpers/hendlerError");

function auth(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and password requerd field!" });
  }

  Users.findOne({ where: { email } }).then((userDb) => {
    if (userDb) {
      bcrypt.compare(password, userDb.password, (err, valid) => {
        if (err) throw hendlerError("Check password login.js", err);

        if (!valid)
          return res.status(400).json({ message: "Неверный логин или пароль" });

        const accessToken = jwt.sign({ email }, secretKey_access, {
          expiresIn: "1m",
        });
        const refreshToken = jwt.sign({ email }, secretKey_refresh, {
          expiresIn: "1d",
        });

        Users.update({ accessToken, refreshToken }, { where: { email } })
          .then(() => {
            return res.status(200).json({
              accessToken: `Bearer ${accessToken}`,
              refreshToken: `Bearer ${refreshToken}`,
            });
          })
          .catch((err) => hendlerError("Error update token login.js", err));
      });
    } else {
      bcrypt.hash(password, 10, (err, hesh) => {
        if (err) return hendlerError("Error create hash password auth.js", err);
        const newUser = {
          email,
          password: hesh,
          accessToken: jwt.sign({ email }, secretKey_access, {
            expiresIn: "1m",
          }),
          refreshToken: jwt.sign({ email }, secretKey_refresh, {
            expiresIn: "1d",
          }),
        };

        Users.create(newUser).then((data) => {
          return res.status(200).json({
            accessToken: `Bearer ${data.accessToken}`,
            refreshToken: `Bearer ${data.refreshToken}`,
          });
        });
      });
    }
  });
}

module.exports = auth;
