import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import LoginComponent from "./LoginComponent";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/LoginSection.sass";

function LoginSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="loginSection">
        <header>
          <Nav />
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
  return (
    <div className="loginSection">
      <header>
        <Hamburger />
        <HeadFooter />
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
