import authTypes from "./authTypes";

const signUpStart = () => ({
  type: authTypes.SIGNUP_START,
});

const signUpSuccess = ({ token }) => ({
  type: authTypes.SIGNUP_SUCCESS,
  payload: { token },
});

const signUpFailure = (error) => ({
  type: authTypes.SIGNUP_FAILURE,
  payload: { error },
});

const logOutStart = () => ({
  type: authTypes.LOGOUT_START,
});

const logOutSuccess = () => ({
  type: authTypes.LOGOUT_SUCCESS,
});

const logOutFailure = (error) => ({
  type: authTypes.LOGOUT_FAILURE,
  payload: { error },
});

const logInStart = () => ({
  type: authTypes.LOGIN_START,
});

const logInSuccess = ({ token }) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: { token },
});

const logInFailure = (error) => ({
  type: authTypes.LOGIN_FAILURE,
  payload: { error },
});

export default {
  logInStart,
  logInSuccess,
  logInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
};
