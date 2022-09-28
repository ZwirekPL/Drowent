import Nav from "./Nav";
import HeadHeader from "./HeadHeader";

import "../style/sass/Header.sass";

const Header = () => {
    return (
      <div className="header">
        <HeadHeader/>
        <Nav/>

      </div>
    );
  }
  
  export default Header;