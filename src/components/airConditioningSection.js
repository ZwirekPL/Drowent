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
        <HeaderSections />
        <Nav />
        <main>
          <AirConditioningComponent />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="airConditioning">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <AirConditioningComponent />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}
export default AirConditioningSection;
