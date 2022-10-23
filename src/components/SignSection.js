
import Nav from  "./Nav";
import Footer from "./Footer";
import SignComponent from "./SignComponent";


import "../style/sass/SignSection.sass";




function SignSection() {
    return (
        <div className="signSection">
            <header>
                <Nav/>
            </header>
            <main>
                <SignComponent/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default SignSection;