import HeaderSections from "../../layouts/HeaderSections";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import VentilationComponent from "./VentilationComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie.js";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/VentilationSection.sass";

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
