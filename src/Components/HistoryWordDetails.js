import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWordData } from '../redux/actions/wordAction';

  const HistoryWordDetails = () => {
    const { word } = useParams();
    const dispatch = useDispatch();
      useEffect(() => {
          // Dispatch the action to fetch word details when the component mounts
          dispatch(getWordData(word));
    }, [dispatch, word]);
  const selectData = state => state.wordReducer.data;
  const selecteddata = useSelector(selectData);
  const data=useSelector(state=>state.historyReducer.searchHistory)
  console.log(data,'data')
  console.log(selecteddata,'selectedData')
  return (
    <div>
      <div className='display-div'>
      
      {selecteddata.length>0&&
      selecteddata.map((item, idx) => (
        <div key={idx}>
            <h2>{item.word}</h2>
            <p>{item.phonetic}</p>
            {item.phonetics.map((phone,ind)=>(
              <div key={ind}>
                    <audio controls><source src={phone.audio} type="audio/mp3" /></audio>
                    <p>{phone.text}</p>
                </div>
            ))}
            {item.meanings.map((meaning,idx)=>(
                <div key={idx}>
                    <h3>{meaning.partOfSpeech}</h3>
                    {meaning.definitions.map((def,i)=><p key={i}>{def.definition}</p>)}
                </div>
                
            ))}
            
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default HistoryWordDetails


