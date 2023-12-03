import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWordData } from '../redux/actions/wordAction';


const CurrentWordDetail = () => {
         const loadingStatus = state => state.loading;
         const dataError = state => state.error;
         const selectData = state=> state.wordReducer.data; 
         const loading = useSelector(loadingStatus);
         const data = useSelector(selectData);
         const error = useSelector(dataError);
         const hasContent = data.length > 0;
         const containerStyle = {
          backgroundColor: hasContent ? 'white' : 'transparent',
        };
  return (
    <div className='currentWordDetails' style={containerStyle}>
      {data.length>0 &&
      data.map((item, idx) => (
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
  )
}

export default CurrentWordDetail;
