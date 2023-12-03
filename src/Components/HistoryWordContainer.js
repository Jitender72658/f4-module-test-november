import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import HistoryWordDetails from '../Components/HistoryWordDetails';
import { getWordData } from '../redux/actions/wordAction';
import { useDispatch } from 'react-redux';
const WordDetailPage = () => {
    const { word } = useParams();
  const dispatch = useDispatch();
    useEffect(() => {
        // Dispatch the action to fetch word details when the component mounts
        dispatch(getWordData(word));
      }, [dispatch, word]);
  return (
    <div >
      <HistoryWordDetails/>
    </div>
  )
}

export default WordDetailPage