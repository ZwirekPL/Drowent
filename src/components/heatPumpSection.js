import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import HeatPumpComponent from "./heatPumpComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/heatPumpSection.sass";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";

function HeatPumpSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="heatPump">
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <HeatPumpComponent />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="heatPump">
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <HeatPumpComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default HeatPumpSection;
