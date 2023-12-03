import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/wordAction';

const WordDisplay = () => {
      const {loading, data, error} = useSelector(state=> state);
      const dispatch = useDispatch();
      console.log(loading,data,error);
      useEffect(()=>{
        //   dispatch(getData());
      },[])
  return (
    <div>
      
    </div>
  )
}

export default WordDisplay