import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { isAuth } from "../redux/auth/authSelector";
import Axios from "axios";

const withAuthRedirect = (Component) => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    Axios.defaults.headers.authorization = isAuth;
    return !isAuth ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = (state) => ({
    isAuth: isAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
