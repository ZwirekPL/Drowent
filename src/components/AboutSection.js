import Header from "./Header";
import MainSection from  "./MainSection";
import Footer from "./Footer";
import About from "./About";


import "../style/css/AboutSection.css";




function AboutSection() {
    return (
        <div className="Main">
            <header>
                <Header/>
            </header>
            <main>
                <MainSection/>
                <About/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default AboutSection;