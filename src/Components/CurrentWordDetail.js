import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWordData } from '../redux/actions/wordAction';

const CurrentWordDetail = () => {
      const data= useSelector(state=> state.wordReducer.data);
      const historyData = useSelector(state=> state.historyReducer.searchHistory);
      console.log(data,historyData);
  return (
    <div className='currentWordDetails'>
      <h1>WordDetailPage</h1>
      <div className='display-div'>
      
      {data.length>0&&
      data.map((item, idx) => (
        <div key={idx}>
            <h2>{item[0].word}</h2>
            <p>{item[0].phonetic}</p>
            {item[0].phonetics.map((phone,index)=>(
              <div key={index}>
                    <audio controls><source src={phone.audio} type="audio/mp3" /></audio>
                    <p>{phone.text}</p>
                </div>
            ))}
            {item[0].meanings.map((meaning,idx)=>(
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

export default CurrentWordDetail;
