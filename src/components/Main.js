
import About from "./About"
import CarouselOpinion from "./CarouselOpinion"
import CarouselBrands from "./CarouselBrands"


import "../style/sass/Main.sass";

const Main = () => {
    return (
      <div className="main">
        <About/>
        <CarouselOpinion/>
        <CarouselBrands/>
      </div>
    );
  }
  
  export default Main;