import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Reducers from "./reducers/Reducers";

const Store = createStore(Reducers, applyMiddleware(thunk, logger));

export default Store;
