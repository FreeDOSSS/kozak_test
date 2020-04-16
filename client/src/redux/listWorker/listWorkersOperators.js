import api from "./../../api/api";
import listWorkersActions from "./listWorkersAction";
import { toast } from "react-toastify";
import { hendlerError } from "./../../helpers/hendlerError";

const getListWorkers = (data) => (dispatch) => {
  dispatch(listWorkersActions.getListWorkersStart());

  api
    .axiosGetList(data)
    .then(({ data }) => {
      dispatch(listWorkersActions.getListWorkerSuccess(data));
    })
    .catch((err) => {
      hendlerError(err, dispatch);
    });
};

export default {
  getListWorkers,
};
