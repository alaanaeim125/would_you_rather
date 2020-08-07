import {
  LOGIN_USER,
  LOGOUT_USER,
} from "../../utils/constants";

const initState = {
  userId: "",
  AuthUser: false
};

const UserReducers = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userId: action.payload.userId,
        AuthUser: true,
      };

    case LOGOUT_USER:
      return {};

    default:
      return state;
  }
};

export default UserReducers;
