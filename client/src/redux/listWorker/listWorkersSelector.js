export const listWorkers = (state) => state.listWorkers.rows;
export const countAllWorkers = (state) => state.listWorkers.count;
export const findByIdWorkers = ({ id, state }) =>
  listWorkers(state).find((el) => el.id === id);
