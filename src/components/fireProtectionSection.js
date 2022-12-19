import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import FireProtectionComponent from "./fireProtectionComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/fireProtectionSection.sass";
import Hamburger from "./hamburger";

function FireProtectionSection() {
  return (
    <div className="fireProtection">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
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
