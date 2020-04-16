import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import listWorkersReducer from "./listWorker/listWorkersReducer";

export default combineReducers({
  auth: authReducer,
  listWorkers: listWorkersReducer,
});
