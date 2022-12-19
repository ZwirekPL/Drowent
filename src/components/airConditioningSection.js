import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import AirConditioningComponent from "./airConditioningComponent";
import CarouselOpinion from "./CarouselOpinion";
import "../style/sass/airConditioningSection.sass";
import Hamburger from "./hamburger";

function airConditioningSection() {
  return (
    <div className="airConditioning">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
      </header>
      <main>
        <AirConditioningComponent />
        <CarouselOpinion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default airConditioningSection;
