import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import AirConditioningComponent from "./airConditioningComponent";
import CarouselOpinion from "./CarouselOpinion";
import Hamburger from "./hamburger";
import Cookie from "./Cookie.js";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/airConditioningSection.sass";

function AirConditioningSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="airConditioning">
        <Cookie />
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <AirConditioningComponent />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="airConditioning">
      <Cookie />
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <AirConditioningComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default AirConditioningSection;
