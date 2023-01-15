import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import VentilationComponent from "./ventilationComponent";
import CarouselOpinion from "./CarouselOpinion";
import Hamburger from "./hamburger";
import Cookie from "./Cookie.js";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/ventilationSection.sass";

function VentilationSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="ventilation">
        <Cookie />
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <VentilationComponent />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="ventilation">
      <Cookie />
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <VentilationComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default VentilationSection;
