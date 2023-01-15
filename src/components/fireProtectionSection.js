import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import FireProtectionComponent from "./fireProtectionComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/fireProtectionSection.sass";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

function FireProtectionSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="fireProtection">
        <Cookie />
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <FireProtectionComponent />
          <CarouselOpinion />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="fireProtection">
      <Cookie />
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <FireProtectionComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FireProtectionSection;
