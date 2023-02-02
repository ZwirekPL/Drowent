import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import LoginComponent from "./LoginComponent";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/LoginSection.sass";

function LoginSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <main className="loginSection">
        <Cookie />
        <Nav />
        <LoginComponent />
        <Footer />
      </main>
    );
  }
  return (
    <main className="loginSection">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <LoginComponent />
      <Footer />
    </main>
  );
}
export default LoginSection;
