import HeaderSections from "../../layouts/HeaderSections";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import RecuperationComponent from "./RecuperationComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/RecuperationSection.sass";

function RecuperationSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="recuperation">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <RecuperationComponent />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="recuperation">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <RecuperationComponent />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}

export default RecuperationSection;
