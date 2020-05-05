const jwt = require("jsonwebtoken");
const {
  secretKey_refresh,
  secretKey_access,
} = require("./../../config/params");
const Users = require("./../../db/model/users");

function refreshToken(req, res) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, secretKey_refresh, (err, decode) => {
    if (err) return res.status(404).json({ message: err });

    const { email } = decode;

    Users.findOne({ where: { email } }).then(({ dataValues: user }) => {
      if (user.token !== token)
        return res.status(404).json({ message: "Bed token" });

      const accessToken = jwt.sign({ email }, secretKey_access, {
        expiresIn: "1m",
      });
      const refreshToken = jwt.sign({ email }, secretKey_refresh, {
        expiresIn: "1m",
      });
    });

    Users.update({ accessToken, refreshToken }, { where: { email } }).then(
      (data) => {
        return res.status(200).json({
          accessToken: `Bearer ${data.accessToken}`,
          refreshToken: `Bearer ${data.refreshToken}`,
        });
      }
    );
  });
}

module.exports = refreshToken;
