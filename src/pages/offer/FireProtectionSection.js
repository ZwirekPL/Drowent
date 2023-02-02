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
