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
        <HeaderSections />
        <Nav />
        <main>
          <VentilationComponent />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="ventilation">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <VentilationComponent />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}
export default VentilationSection;
