import { combineReducers, createStore } from "redux";

import counterReducer from "./ducks/counter";
import changeNameReducer from "childApp/changeNameReducer";

const reducer = combineReducers({
  counter: counterReducer,
  changeName: changeNameReducer,
});

const store = createStore(reducer);

export default store;
