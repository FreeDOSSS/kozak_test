import { connect } from "react-redux";
import Header from "./Header";
import authOperations from "./../../redux/auth/authOperators";

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(authOperations.logOut()),
});

export default connect(null, mapDispatchToProps)(Header);
