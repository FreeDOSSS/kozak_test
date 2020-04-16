import listWorkersTypes from "./listWorkersTypes";

console.log("listWorkersTypes", listWorkersTypes);

const getListWorkersStart = () => ({
  type: listWorkersTypes.GETLISTWORKERS_START,
});

const getListWorkerSuccess = ({ rows, count }) => ({
  type: listWorkersTypes.GETLISTWORKERS_SUCCESS,
  payload: { rows, count },
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
