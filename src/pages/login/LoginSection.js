import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import LoginComponent from "./LoginComponent";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/LoginSection.sass";

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
