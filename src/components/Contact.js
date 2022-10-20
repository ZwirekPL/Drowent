import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
import Footer from "./Footer";
import About from "./About";


import "../style/sass/Contact.sass";




function Contact() {
    return (
        <div className="contact">
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

export default Contact;