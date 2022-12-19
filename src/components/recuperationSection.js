import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import RecuperationComponent from "./recuperationComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/recuperationSection.sass";
import Hamburger from "./hamburger";

function RecuperationSection() {
  return (
    <div className="recuperation">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
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
