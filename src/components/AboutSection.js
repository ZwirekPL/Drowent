import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import About from "./About";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/AboutSection.sass";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";

function AboutSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="aboutSection">
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <About />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="aboutSection">
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <About />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutSection;
