import {WORD_LOADING_STATUS, WORD_SUCCESS_DATA, WORD_FAILURE_DATA} from '../actions/actionTypes.js';


let initialState = {
      loading: false,
      data: [],
      error: ""
}
const wordReducer = (state=initialState,action)=>{
    switch(action.type){
        case WORD_LOADING_STATUS: return {...state, loading: true};
        case WORD_SUCCESS_DATA: return {...state, loading: false,data: action.payload,error: ""};
        case WORD_FAILURE_DATA: return {...state, loading: false, error: action.payload};
        default: return state;
    }
}

export default wordReducer;