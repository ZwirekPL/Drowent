import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
import Footer from "./Footer";
import Contact from "./contact";


import "../style/sass/ContactSection.sass";




function ContactSection() {
    return (
        <div className="contactSection">
            <header>
                <HeaderSections/>
                <Nav/>
            </header>
            <main>
                <Contact/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default ContactSection;