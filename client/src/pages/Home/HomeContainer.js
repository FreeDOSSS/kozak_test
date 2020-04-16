import Home from "./Home";
import { isAuth } from "./../../redux/auth/authSelector";
import { connect } from "react-redux";
import authOperations from "./../../redux/auth/authOperators";

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (credentials) => dispatch(authOperations.signUp(credentials)),
  logIn: (credentials) => dispatch(authOperations.logIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
