import Nav from "./Nav";
import HeadHeaders from "./HeadHeaders";
import HeadFooter from "./HeadFooter";
import Hamburger from "./hamburger";
import useWindowDimensions from "./setWindowSize";
import "../style/sass/Header.sass";

const Header = () => {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="header">
        <HeadHeaders />
        <Nav />
        <HeadFooter />
      </div>
    );
  }
  return (
    <div className="header">
      <Hamburger />
      <HeadFooter />
    </div>
  );
};

export default Header;
