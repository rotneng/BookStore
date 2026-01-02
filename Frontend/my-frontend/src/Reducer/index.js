// import {rootReducer} from "./auth.reducer"
// import {combineReducers} from "redux"
import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import { booksReducer } from "./book.reducer";
// const { combineReducers } = require("redux");
// const { default: authReducer } = require("./auth.reducer");

const rootReducer = combineReducers({
  auth: authReducer,
  book: booksReducer,
});

export default rootReducer;
