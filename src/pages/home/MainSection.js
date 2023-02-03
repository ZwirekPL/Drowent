import About from "../about/About";
import CarouselOpinion from "../../components/CarouselOpinion";
import CarouselBrands from "./CarouselBrands";

import "../../assets/style/sass/MainSection.sass";

const MainSection = () => {
  return (
    <main className="mainSection">
      <article>
        <About />
      </article>
      <article>
        <CarouselOpinion />
      </article>
      <article>
        <CarouselBrands />
      </article>
    </main>
  );
};

export default MainSection;
