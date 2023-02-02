import HeaderSections from "../../layouts/HeaderSections";
import HeadFooter from "../../layouts/HeadFooter";
import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import Contact from "./Contact";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/ContactSection.sass";

function ContactSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="header">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="header">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ContactSection;
