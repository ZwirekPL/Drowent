import HeaderSections from "../../layouts/HeaderSections";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import FireProtectionComponent from "./FireProtectionComponent";
import CarouselOpinion from "../../components/CarouselOpinion";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/FireProtectionSection.sass";

function FireProtectionSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="fireProtection">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <FireProtectionComponent />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="fireProtection">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <FireProtectionComponent />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}

export default FireProtectionSection;
