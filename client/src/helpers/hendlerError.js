import authActions from "./../redux/auth/authAction";

export const hendlerError = (err, dispatch) => {
  if (err.response.data.message === "Not authorized")
    dispatch(authActions.clearToken());
};
