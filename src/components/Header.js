import Nav from "./Nav";
import HeadHeaders from "./HeadHeaders";

import "../style/sass/Header.sass";

const Header = () => {
    return (
      <div className="header">
        <HeadHeaders/>
        <Nav/>

      </div>
    );
  }
  
  export default Header;