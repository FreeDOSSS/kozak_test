import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { isAuth } from "../redux/auth/authSelector";

const withAuthRedirect = (Component) => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    return !isAuth ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = (state) => ({
    isAuth: isAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
