import { Routes , Route,} from "react-router-dom";

import Main from "./Main";
import AboutSection from "./AboutSection"

import "../style/css/App.css";
import "../fontello/css/fontello.css"




function App() {
  return (
    <Routes>
      
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/" exact element={<Main/>}/>
      
    </Routes>
  );
}

export default App;
