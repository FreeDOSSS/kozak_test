import { connect } from "react-redux";
import RenderList from "./RenderList";
import { listWorkers } from "../../redux/listWorker/listWorkersSelector";

const mapStateToProps = (state) => ({
  list: listWorkers(state),
});

export default connect(mapStateToProps)(RenderList);
