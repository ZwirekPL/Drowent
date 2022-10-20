import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
// import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import About from "./About";

import "../style/sass/AboutSection.sass";




function AboutSection() {
    return (
        <div className="aboutSection">
            <header>
                <HeaderSections/>
                <Nav/>
                {/* <HeadFooter/> */}
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

export default AboutSection;