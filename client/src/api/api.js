import axios from "axios";
import params from "./../constants/params";

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = params.server_url;

const axiosRegister = (data) => axios.post("/signup", data);
const axiosLogIn = (data) => axios.post("/login", data);
const axiosLogOut = () => axios.post("/logout");

const axiosGetList = ({ limit, fullName, page }) =>
  axios.get(`/workers?limit=${limit}&page=${page}&fullName=${fullName}`);

const axiosDeleteWorker = (id) => axios.delete(`/workers?id=${id}`);

const axiosSave = (data) => axios.post("/workers", data);

export default {
  axiosRegister,
  axiosLogIn,
  axiosLogOut,
  axiosGetList,
  axiosDeleteWorker,
  axiosSave,
};
