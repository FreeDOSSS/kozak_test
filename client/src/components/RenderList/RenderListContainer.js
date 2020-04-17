import { connect } from "react-redux";
import RenderList from "./RenderList";
import { listWorkers } from "../../redux/listWorker/listWorkersSelector";
import listWorkersOperators from "../../redux/listWorker/listWorkersOperators";

const mapStateToProps = (state) => ({
  list: listWorkers(state),
});

const mapDispatchToProps = (dispatch) => ({
  del: (id) => dispatch(listWorkersOperators.deleteWorkers(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderList);
