import Nav from "./Nav";
import SwiperHeader from "./SwiperHeaderComponent";
import HeadFooter from "./HeadFooter";
import Hamburger from "./Hamburger";
import ContactFooterSticky from "./ContactFooterSticky";
import useWindowDimensions from "../utils/setWindowSize";
import "../assets/style/sass/Header.sass";

const Header = () => {
  const { width } = useWindowDimensions();
  if (width > 1000) {
    return (
      <header className="header">
        <SwiperHeader />
        <Nav />
        <HeadFooter />
      </header>
    );
  }
  return (
    <header className="header">
      <Hamburger />
      <HeadFooter />
      <ContactFooterSticky />
    </header>
  );
};

export default Header;
