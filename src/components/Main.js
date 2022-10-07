
import About from "./About"
import Carousel from "./Carousel"


import "../style/sass/Main.sass";

const Main = () => {
    return (
      <div className="main">
        <About/>
        <Carousel/>
      </div>
    );
  }
  
  export default Main;