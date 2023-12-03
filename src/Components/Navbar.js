import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
     const navigate = useNavigate();
  return (
    <div className='navbarContainer'>
         <div >
           <h1>Dictionary App</h1>
         </div>
         <div className='navbarButtonContainer'>
             <button onClick={()=> navigate("/")}>Home</button>
             <button onClick={()=> navigate("/history")}>History</button>
         </div>
    </div>
  )
}

export default Navbar