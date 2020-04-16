import * as listWorkersTypes from "./listWorkersTypes";

const getListWorkersStart = () => ({
  type: listWorkersTypes.GETLISTWORKERS_START,
});

const getListWorkerSuccess = ({ data }) => ({
  type: listWorkersTypes.GETLISTWORKERS_SUCCESS,
  payload: { data },
});
const getListWorkerFailure = (error) => ({
  type: listWorkersTypes.GETLISTWORKERS_FAILURE,
  payload: { error },
});

export default {
  getListWorkersStart,
  getListWorkerSuccess,
  getListWorkerFailure,
};
