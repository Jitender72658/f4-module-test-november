import {createStore,applyMiddleware} from "redux";
import wordReducer from "./reducers/wordReducer.js";
import thunk from "redux-thunk";

const  store = createStore(wordReducer,applyMiddleware(thunk));

export default store;