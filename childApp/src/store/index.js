import { combineReducers, createStore } from "redux";

import changeNameReducer from "./ducks/changeName";

export const reducer = combineReducers({
  changeName: changeNameReducer,
});

const store = createStore(reducer);

export default store;
