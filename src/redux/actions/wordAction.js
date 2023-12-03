import {WORD_LOADING_STATUS, WORD_SUCCESS_DATA, WORD_FAILURE_DATA} from './actionTypes.js';
import axios from 'axios';

export const wordLoadingStatus= ()=>{
    return {
        type: WORD_LOADING_STATUS
    }
}
export const wordSuccessData = (data)=>{
    return {
        type: WORD_SUCCESS_DATA,
        payload: data
    }
}
export const wordFailureData = (error)=>{
    return {
        type: WORD_FAILURE_DATA,
        payload: error
    }
}

export const getWordData = (word)=>{
    return (dispatch)=>{
        dispatch(wordLoadingStatus());
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(result=> dispatch(wordSuccessData( result.data)))
        .catch(error=> dispatch(wordFailureData(error.message)));
    }
}
