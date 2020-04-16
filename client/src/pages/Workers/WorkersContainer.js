import { compose } from "redux";
import withAuthRedirect from "./../../HOC/WithAuthRedirect";
import { connect } from "react-redux";
import Workers from "./Workers";

export default compose(withAuthRedirect, connect(null, null))(Workers);
