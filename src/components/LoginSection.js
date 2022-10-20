import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
import Footer from "./Footer";
import LoginComponent from "./LoginComponent";


import "../style/sass/LoginSection.sass";




function LoginSection() {
    return (
        <div className="loginSection">
            <header>
                <HeaderSections/>
                <Nav/>
            </header>
            <main>
                <LoginComponent/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default LoginSection;