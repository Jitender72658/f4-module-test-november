import {ADD_TO_HISTORY} from './actionTypes.js'

export const addToHistory=(searchWord)=>{
    return{
        type:ADD_TO_HISTORY,
        payload:searchWord
    }
}
