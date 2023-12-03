import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import History from "./Components/History";
import HistoryWordDetails  from './Components/HistoryWordDetails';
import { Router, Route,Routes } from 'react-router-dom';
const App = ()=> {
  return (
    <div className="App">
         <Navbar/>
         <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/history" element={<History/>} />
                 <Route path='/details' element={<HistoryWordDetails/>}/>
         </Routes>
    </div>
  );
}

export default App;
