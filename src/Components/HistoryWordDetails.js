import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';

  const HistoryWordDetails = () => {

  const selectData = state => state.wordReducer.data;
  const selecteddata = useSelector(selectData);
  const data=useSelector(state=>state.historyReducer.searchHistory)
  return (
    <div>
      <div className='history-word-details'>
      
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


