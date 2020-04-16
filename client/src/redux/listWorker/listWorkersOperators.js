import api from "./../../api/api";
import listWorkersActions from "./listWorkersAction";
import { toast } from "react-toastify";

const getListWorkers = (data) => (dispatch) => {
  dispatch(listWorkersActions.getListWorkersStart());

  api.axiosGetList(data).then(({ data }) => {
    console.log("data", data);
  });
};

export default {
  getListWorkers,
};
