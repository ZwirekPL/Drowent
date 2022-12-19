import Nav from "./Nav";
import HeadHeaders from "./HeadHeaders";
import HeadFooter from "./HeadFooter";
import Hamburger from "./hamburger";

import "../style/sass/Header.sass";

const Header = () => {
  return (
    <div className="header">
      <HeadHeaders />
      <Nav />
      <Hamburger />
      <HeadFooter />
    </div>
  );
};

export default Header;
