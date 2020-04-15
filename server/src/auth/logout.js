const Users = require("./../../db/model/users");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./../../config/params");
const hendlerError = require("./../../helpers/hendlerError");

function logout(req, res) {
  if (!req.headers.authorization)
    return res.status(404).json({ message: "You needed send token" });
  const token = req.headers.authorization.replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, decode) => {
    if (err) return res.status(401).json({ message: "Not authorized" });
    const { email } = decode;

    Users.findOne({ where: { email } })
      .then(({ dataValues: user }) => {
        if (user.token !== token)
          return res.status(401).json({ message: "Not authorized" });

        Users.update({ token: null }, { where: { email } })
          .then(() => {
            res.status(200).json({ message: "Logout successfully" });
          })
          .catch((err) => hendlerError("Error update logout", err));
      })
      .catch((err) => hendlerError("Error find logout", err));
  });
}

module.exports = logout;
