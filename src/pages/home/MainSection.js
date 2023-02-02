import About from "./About";
import CarouselOpinion from "./CarouselOpinion";
import CarouselBrands from "./CarouselBrands";

import "../style/sass/MainSection.sass";

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
