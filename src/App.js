import Navbar from "./Components/Navbar";
import WordDisplay from "./Components/WordDisplay.js";
import SearchContainer from "./Components/SearchContainer.js";
function App() {
  return (
    <div className="App">
         <Navbar/>
         <SearchContainer/>
         <WordDisplay/>
    </div>
  );
}

export default App;
