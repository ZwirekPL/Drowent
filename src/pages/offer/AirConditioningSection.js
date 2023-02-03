import HeaderSections from "../../layouts/HeaderSections";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import AirConditioningComponent from "./AirConditioningComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie.js";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/AirConditioningSection.sass";

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
