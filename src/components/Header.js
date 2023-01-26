import Nav from "./Nav";
import SwiperHeader from "./swiperHeader";
import HeadFooter from "./HeadFooter";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";
import "../style/sass/Header.sass";

const Header = () => {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="header">
        <SwiperHeader />
        <nav>
          <Nav />
        </nav>
        <HeadFooter />
      </div>
    );
  }
  return (
    <div className="header">
      <nav>
        <Hamburger />
      </nav>
      <HeadFooter />
    </div>
  );
};

export default Header;
