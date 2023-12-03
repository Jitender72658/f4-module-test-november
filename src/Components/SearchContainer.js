import React,{useState,useEffect} from 'react'
import { getWordData } from '../redux/actions/wordAction'
import { useSelector,useDispatch } from 'react-redux'
import { addToHistory } from '../redux/actions/historyAction'

const SearchContainer = () => {
       const [inputValue, setInputValue] = useState("");
       const loadingStatus = state => state.loading;
       const wordData = state => state.data;
       const wordError = state => state.error;
       
       const loading = useSelector(loadingStatus);
       const data = useSelector(wordData);
       const error = useSelector(wordError);
       const dispatch=useDispatch()

       function handleSearch(e){
           e.preventDefault();
           dispatch(getWordData(inputValue)) 
           dispatch(addToHistory(inputValue))
           setInputValue("");      
       }
       console.log(data)
  return (
    <div className='searchContainer'>
        <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} placeholder="Search for any word .." />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchContainer
