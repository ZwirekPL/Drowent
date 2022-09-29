import Nav from "./Nav";
import HeadHeader from "./HeadHeaders";

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