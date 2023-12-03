import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getWordData} from '../redux/actions/wordAction'

const History = () => {
  const searchHistory =useSelector(state=>state.historyReducer.searchHistory)
  return (
    <div className='historyContainer'>
       {/* <li key={ind}>
                <Link to={`}>{item}</Link>
            </li> */}
       <h3>Search History</h3>
      { searchHistory.length>0 && <ul>
          {searchHistory.map((item,index)=> <li key={index}><Link to={`/details`}>{item}</Link></li>)}
       </ul>
      }
    </div>
  )
}

export default History
