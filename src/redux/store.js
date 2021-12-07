import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import user from "./reducers/user";
import counter from "./reducers/counter";

const store = createStore(
  combineReducers({ user, counter }),
  applyMiddleware(thunk)
);

export default store;
