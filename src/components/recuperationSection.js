import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import RecuperationComponent from "./recuperationComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/recuperationSection.sass";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";

function RecuperationSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="recuperation">
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <RecuperationComponent />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="recuperation">
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <RecuperationComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RecuperationSection;
