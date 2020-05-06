const jwt = require("jsonwebtoken");
const { secretKey_access } = require("./../../config/params");
const Users = require("./../../db/model/users");
const hendlerError = require("./../../helpers/hendlerError");

function isAuth(req, res, next) {
  console.log("req.body", req.body);
  if (!req.headers.authorization)
    return res.status(404).json({ message: "You needed send token" });

  const token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, secretKey_access, (err, decode) => {
    if (err) return res.status(401).json({ message: "Not authorized" });

    const { email } = decode;

    Users.findOne({ where: { email } })
      .then(({ dataValues: user }) => {
        if (user.accessToken !== token)
          return res.status(401).json({ message: "Error valid auth" });
        next();
      })
      .catch((err) => hendlerError("error in find user isAuth.js", err));
  });
}

module.exports = isAuth;
