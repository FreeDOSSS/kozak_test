import { compose } from "redux";
import withAuthRedirect from "./../../HOC/WithAuthRedirect";
import { connect } from "react-redux";
import Workers from "./Workers";
import listWorkersOperators from "./../../redux/listWorker/listWorkersOperators";

const mapDispatchToProps = (dispatch) => ({
  getListWorkers: (data) => dispatch(listWorkersOperators.getListWorkers(data)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(Workers);
