import authTypes from "./authTypes";

const authReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.SIGNUP_SUCCESS:
      return payload.token;
    case authTypes.LOGIN_SUCCESS:
      return payload.token;
    case authTypes.LOGOUT_SUCCESS:
      return null;
    case authTypes.CLEAR_TOKEN:
      return null;
    default:
      return state;
  }
};

export default authReducer;
