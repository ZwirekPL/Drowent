import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import About from "./About";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/AboutSection.sass";
import Hamburger from "./hamburger";

function AboutSection() {
  return (
    <div className="aboutSection">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
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
