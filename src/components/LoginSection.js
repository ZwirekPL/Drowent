import Nav from "./Nav";
import Footer from "./Footer";
import LoginComponent from "./LoginComponent";
import Hamburger from "./hamburger";

import "../style/sass/LoginSection.sass";

function LoginSection() {
  return (
    <div className="loginSection">
      <header>
        <Nav />
        <Hamburger />
      </header>
      <main>
        <LoginComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default LoginSection;
