import listWorkersTypes from "./listWorkersTypes";

const initialState = {
  rows: [],
  count: 0,
};

const listWorkersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case listWorkersTypes.GETLISTWORKERS_SUCCESS:
      return {
        rows: payload.rows,
        count: payload.count,
      };
    default:
      return state;
  }
};

export default listWorkersReducer;
