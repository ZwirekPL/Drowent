import HeaderSections from "../../layouts/HeaderSections";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import HeatPumpComponent from "./HeatPumpComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/HeatPumpSection.sass";

function HeatPumpSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="heatPump">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <HeatPumpComponent />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="heatPump">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <HeatPumpComponent />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}
export default HeatPumpSection;
