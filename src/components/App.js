import { Routes , Route,} from "react-router-dom";

import Main from "./Main";
import LoginSection from "./LoginSection";
import AboutSection from "./AboutSection";
import OfferSection from "./OfferSection";
import BlogSection from "./BlogSection";
import Contact from "./Contact";



import "../style/css/App.css";
import "../fontello/css/fontello.css";




function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/login" element={<LoginSection/>}/>
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/offer"  element={<OfferSection/>}/>
        <Route path="/blog" element={<BlogSection/>}/>
        <Route path="/contact"  element={<Contact/>}/>

      
    </Routes>
  );
}

export default App;
