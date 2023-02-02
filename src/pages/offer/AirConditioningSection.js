import HeaderSections from "../../components/HeaderSections";
import Nav from "../../components/Nav";
import HeadFooter from "../../components/HeadFooter";
import Footer from "../../components/Footer";
import AirConditioningComponent from "./airConditioningComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../components/hamburger";
import Cookie from "../../components/Cookie.js";
import useWindowDimensions from "../../components/setWindowSize";

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
