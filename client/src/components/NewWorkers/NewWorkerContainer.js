import { connect } from "react-redux";
import NewWorker from "./NewWorker";
import listWorkersOperators from "./../../redux/listWorker/listWorkersOperators";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  sendWorker: (data) => dispatch(listWorkersOperators.saveWorker(data)),
});

export default connect(null, mapDispatchToProps)(NewWorker);
