import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import VentilationComponent from "./ventilationComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/ventilationSection.sass";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";

function VentilationSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="ventilation">
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
