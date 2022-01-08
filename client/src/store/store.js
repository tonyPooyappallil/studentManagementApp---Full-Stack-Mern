import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { studentReducer } from "./studentStore/studentReducer";
import thunk from "redux-thunk";
// const rootReducer = combineReducers({
//   students: studentReducer,
// });

export const store = createStore(
  studentReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
