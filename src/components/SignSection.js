import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import SignComponent from "./SignComponent";
import Hamburger from "./hamburger";
import Cookie from "./Cookie.js";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/SignSection.sass";

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
