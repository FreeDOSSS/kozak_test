const router = require("express").Router();
const login = require("./auth/login");
const signup = require("./auth/signup");
const logout = require("./auth/logout");
const isAuth = require("./auth/isAuth");
// Auth
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

// Workers
router.use("/workers", isAuth);
router.get("/workers", () => {});
router.post("/workers", () => {});
router.delete("/workers", () => {});
router.patch("/workers", () => {});

module.exports = router;
