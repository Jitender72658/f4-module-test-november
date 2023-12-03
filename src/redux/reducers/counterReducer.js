import {STORE} from '../actions/actionTypes.js'

let initialState = 0;
function counterReducer(state=initialState,actions){
    switch(actions.type){
        case STORE: return state+1;
        default: return state;
    }
}

export default counterReducer;