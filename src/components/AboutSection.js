import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import About from "./About";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/AboutSection.sass";
import Hamburger from "./hamburger";
import Cookie from "./Cookie.js";
import useWindowDimensions from "./setWindowSize";

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
