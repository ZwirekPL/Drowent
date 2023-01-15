import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
import Footer from "./Footer";
import About from "./About";


import "../style/sass/OfferSection.sass";




function OfferSection() {
    return (
        <div className="offerSection">
            <header>
                <HeaderSections/>
                <Nav/>
            </header>
            <main>
                <About/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default OfferSection;