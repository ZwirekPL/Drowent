import Nav from "../../layouts/Nav";
import HeadFooter from "../../layouts/HeadFooter";
import Footer from "../../layouts/Footer";
import SignComponent from "./SignComponent";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie.js";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/SignSection.sass";

function SignSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="signSection">
        <Cookie />
        <Nav />
        <SignComponent />
        <Footer />
      </div>
    );
  }
  return (
    <div className="signSection">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <SignComponent />
      <Footer />
    </div>
  );
}

export default SignSection;
