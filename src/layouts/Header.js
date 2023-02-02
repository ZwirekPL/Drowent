import Nav from "./Nav";
import SwiperHeader from "./swiperHeader";
import HeadFooter from "./HeadFooter";
import Hamburger from "./Hamburger";
import useWindowDimensions from "./setWindowSize";
import "../style/sass/Header.sass";

const Header = () => {
  const { width } = useWindowDimensions();
  if (width > 768) {
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
    </header>
  );
};

export default Header;
