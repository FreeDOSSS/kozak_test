import api from "./../../api/api";
import authActions from "./authAction";
import { toast } from "react-toastify";
import { hendlerError } from "./../../helpers/hendlerError";
const signUp = (data) => (dispatch) => {
  dispatch(authActions.signUpStart());

  api
    .axiosRegister(data)
    .then(({ data }) => dispatch(authActions.signUpSuccess(data)))
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(authActions.signUpFailure(err));
    });
};

const logIn = (data) => (dispatch) => {
  dispatch(authActions.logInStart());

  api
    .axiosLogIn(data)
    .then(({ data }) => {
      console.log("data", data);
      dispatch(authActions.logInSuccess(data));
    })
    .catch((err) => {
      // console.log("err logIn", err);
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(authActions.logInFailure(err));
    });
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logOutStart());

  api
    .axiosLogOut()
    .then(() => dispatch(authActions.logOutSuccess()))
    .catch((err) => {
      dispatch(authActions.logOutFailure(err));
      hendlerError(err, dispatch);
    });
};

export default {
  signUp,
  logIn,
  logOut,
};
