import axios from "axios";
import params from "./../constants/params";
/* DEFAULTS SETTINGS */
axios.defaults.baseURL = params.server_url;
// axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.put["Content-Type"] = "application/json";

const axiosRegister = (data) => axios.post("/signup", data);
const axiosLogIn = (data) => axios.post("/login", data);
const axiosLogOut = () => axios.post("/logout");

export default {
  axiosRegister,
  axiosLogIn,
  axiosLogOut,
};
