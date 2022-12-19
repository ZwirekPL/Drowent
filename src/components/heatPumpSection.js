import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import HeatPumpComponent from "./heatPumpComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/heatPumpSection.sass";
import Hamburger from "./hamburger";

function HeatPumpSection() {
  return (
    <div className="heatPump">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
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
