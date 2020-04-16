import api from "./../../api/api";
import authActions from "./authAction";

const signUp = (data) => (dispatch) => {
  dispatch(authActions.signUpStart());

  api
    .axiosRegister(data)
    .then(({ data }) => dispatch(authActions.signUpSuccess(data.token)))
    .catch((err) => {
      console.log("err signUp", err);
      dispatch(authActions.signUpFailure(err));
    });
};

const logIn = (data) => (dispatch) => {
  dispatch(authActions.logInStart());

  api
    .axiosLogIn(data)
    .then(({ data }) => dispatch(authActions.logInSuccess(data.token)))
    .catch((err) => {
      console.log("err logIn", err);
      dispatch(authActions.logInFailure(err));
    });
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logOutStart());

  api
    .axiosLogOut()
    .then(() => dispatch(authActions.logOutSuccess()))
    .catch((err) => {
      console.log("err logOut", err);
      dispatch(authActions.logOutFailure(err));
    });
};

export default {
  signUp,
  logIn,
  logOut,
};
