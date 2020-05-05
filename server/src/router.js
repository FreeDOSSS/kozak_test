const router = require("express").Router();

// fnAuth
// const login = require("./auth/login");
// const signup = require("./auth/signup");
// const logout = require("./auth/logout");
const auth = require("./auth/auth");
const isAuth = require("./auth/isAuth");
const refreshToken = require("./auth/refreshToken");
// fnWorker
const createWorker = require("./workers/createWorkers");
const getListWorkers = require("./workers/getListWorker");
const deleteWorkers = require("./workers/deleteWorker");
const updateWorkers = require("./workers/updateWorker");

// Auth
router.post("/auth", auth);
router.post("/refreshtoken", refreshToken);

// router.post("/login", login);
// router.post("/signup", signup);
// router.post("/logout", logout);

// Workers
router.use("/workers", isAuth);
router.get("/workers", getListWorkers);
router.post("/workers", createWorker);
router.delete("/workers", deleteWorkers);
router.patch("/workers", updateWorkers);

module.exports = router;
