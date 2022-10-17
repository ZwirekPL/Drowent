
import About from "./About"
import CarouselOpinion from "./CarouselOpinion"
import CarouselBrands from "./CarouselBrands"


import "../style/sass/MainSection.sass";

const MainSection = () => {
    return (
      <div className="mainSection">
        <About/>
        <CarouselOpinion/>
        <CarouselBrands/>
      </div>
    );
  }
  
  export default MainSection;