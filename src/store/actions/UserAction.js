import { LOGIN_USER, LOGOUT_USER } from "../../utils/constants";

export const LoginUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
      payload: { userId: userId },
    });
  };
};


export const LogOutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };
};
