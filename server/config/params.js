module.exports = {
  secretKey_access: process.env.SECRET_KEY_ACCESS || "access",
  secretKey_refresh: process.env.SECRET_KEY_REFRESH || "refresh",
  port: process.env.PORT || 5000,
};
