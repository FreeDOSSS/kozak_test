import { connect } from "react-redux";
import listWorkersOperators from "./../../redux/listWorker/listWorkersOperators";
import { findByIdWorkers } from "./../../redux/listWorker/listWorkersSelector";
import EditWorker from "./EditWorker";

const mapStateToProps = (state) => ({
  item: (id) => findByIdWorkers({ id, state }),
});

const mapDispatchToProps = (dispatch) => ({
  saveEdit: (data) => dispatch(listWorkersOperators.editWorker(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorker);
