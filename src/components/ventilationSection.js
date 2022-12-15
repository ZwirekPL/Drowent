import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import VentilationComponent from "./ventilationComponent";
import CarouselOpinion from "./CarouselOpinion"
import "../style/sass/ventilationSection.sass";




function VentilationSection() {
    return (
        <div className="ventilation">
            <header>
                <HeaderSections/>
                <Nav/>
                {/* <HeadFooter/> */}
            </header>
            <main>
                <VentilationComponent/>
                <CarouselOpinion/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default VentilationSection;