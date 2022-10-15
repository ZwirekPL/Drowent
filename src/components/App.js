import Header from "./Header";
import Main from  "./Main";
import Footer from "./Footer";

import { BrowserRouter as Router} from "react-router-dom";

import "../style/css/App.css";
import "../fontello/css/fontello.css"




function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer/>
        </footer>
      
      </div>
    </Router>
  );
}

export default App;
