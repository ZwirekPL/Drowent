import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import HeatPumpComponent from "./heatPumpComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/heatPumpSection.sass";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

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
