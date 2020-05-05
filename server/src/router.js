const router = require("express").Router();

// fnAuth
const login = require("./auth/login");
const signup = require("./auth/signup");
const logout = require("./auth/logout");
const isAuth = require("./auth/isAuth");

// fnWorker
const createWorker = require("./workers/createWorkers");
const getListWorkers = require("./workers/getListWorker");
const deleteWorkers = require("./workers/deleteWorker");
const updateWorkers = require("./workers/updateWorker");

// Auth
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/auth");

// Workers
router.use("/workers", isAuth);
router.get("/workers", getListWorkers);
router.post("/workers", createWorker);
router.delete("/workers", deleteWorkers);
router.patch("/workers", updateWorkers);

module.exports = router;
