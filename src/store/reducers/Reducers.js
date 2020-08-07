import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import UserReducers from "./UserReducers";

const Reducers = combineReducers({
  data: DataReducer,
  user: UserReducers,
});

export default Reducers;
