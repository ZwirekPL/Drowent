import HeaderSections from "../../layouts/HeaderSections.js";
import Hamburger from "../../layouts/Hamburger";
import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import About from "./About";
import CarouselOpinion from "../../components/CarouselOpinion";
import Cookie from "../../components/Cookie.js";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/AboutSection.sass";

function AboutSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="aboutSection">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <About />
          <CarouselOpinion />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="aboutSection">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <About />
        <CarouselOpinion />
      </main>
      <Footer />
    </div>
  );
}

export default AboutSection;
