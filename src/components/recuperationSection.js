import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import RecuperationComponent from "./recuperationComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/recuperationSection.sass";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

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
