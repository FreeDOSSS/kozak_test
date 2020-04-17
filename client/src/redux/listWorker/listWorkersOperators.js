import { toast } from "react-toastify";
import api from "./../../api/api";
import { hendlerError } from "./../../helpers/hendlerError";
import listWorkersActions from "./listWorkersAction";

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

const deleteWorkers = (id) => (dispatch) => {
  dispatch(listWorkersActions.deleteWorkersStart());

  api
    .axiosDeleteWorker(id)
    .then(({ data }) => {
      toast.success(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(listWorkersActions.deleteWorkersSuccess(data));
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      dispatch(listWorkersActions.deleteWorkersFailure());

      hendlerError(err, dispatch);
    });
};

const saveWorker = (data) => (dispatch) => {
  dispatch(listWorkersActions.saveWorkersStart());

  api
    .axiosSave(data)
    .then(({ data }) => {
      toast.success("Seved", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(listWorkersActions.saveWorkersSuccess());
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(listWorkersActions.saveWorkersFailure());

      hendlerError(err, dispatch);
    });
};

export default {
  getListWorkers,
  deleteWorkers,
  saveWorker,
};
