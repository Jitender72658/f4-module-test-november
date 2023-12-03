import {createStore} from "redux";
// import {STORE} from './actionTypes.js';
import counterReducer from "./reducers/counterReducer.js";

const  store = createStore(counterReducer);

export default store;