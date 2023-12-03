import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import { getWordData} from '../redux/actions/wordAction'

const History = () => {
  const searchHistory =useSelector(state=>state.historyReducer.searchHistory)
  console.log(searchHistory)
  return (
    <div>
       {/* <li key={ind}>
                <Link to={`}>{item}</Link>
            </li> */}
       <h3>Search History</h3>
      { searchHistory.length>0 && <ul>
          {searchHistory.map((item,index)=> <li key={index}><a href={`/details`}>{item}</a></li>)}
       </ul>
      }
    </div>
  )
}

export default History
