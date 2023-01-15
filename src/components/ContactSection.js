import HeaderSections from "./HeaderSections";
import HeadFooter from "./HeadFooter";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./contact";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/ContactSection.sass";

function ContactSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="header">
        <Cookie />
        <header>
          <HeaderSections />
          <Nav />
        </header>
        <main>
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="header">
      <Cookie />
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ContactSection;
