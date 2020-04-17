import listWorkersTypes from "./listWorkersTypes";

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

const deleteWorkersStart = () => ({
  type: listWorkersTypes.DELETEWORKERS_START,
});

const deleteWorkersSuccess = ({ message }) => ({
  type: listWorkersTypes.DELETEWORKERS_SUCCESS,
  payload: { message },
});

const deleteWorkersFailure = () => ({
  type: listWorkersTypes.DELETEWORKERS_FAILURE,
});

const saveWorkersStart = () => ({
  type: listWorkersTypes.SAVEWORKERS_START,
});

const saveWorkersSuccess = () => ({
  type: listWorkersTypes.SAVEWORKERS_SUCCESS,
});

const saveWorkersFailure = () => ({
  type: listWorkersTypes.SAVEWORKERS_FAILURE,
});

export default {
  getListWorkersStart,
  getListWorkerSuccess,
  getListWorkerFailure,
  deleteWorkersStart,
  deleteWorkersSuccess,
  deleteWorkersFailure,
  saveWorkersStart,
  saveWorkersSuccess,
  saveWorkersFailure,
};
