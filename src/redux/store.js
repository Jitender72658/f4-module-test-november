import {createStore,applyMiddleware,combineReducers} from "redux";
import wordReducer from "./reducers/wordReducer.js";
import historyReducer from "./reducers/historyReducer.js";
import thunk from "redux-thunk";
const combineReducer = combineReducers(
    {
    wordReducer: wordReducer,
    historyReducer: historyReducer
}
)

const  store = createStore(combineReducer,applyMiddleware(thunk));

export default store;


