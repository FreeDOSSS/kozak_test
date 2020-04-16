import listWorkersTypes from "./listWorkersTypes";

const listWorkersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case listWorkersTypes.GETLISTWORKERS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default listWorkersReducer;
