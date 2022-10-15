import Nav from "./Nav";
import HeadHeaders from "./HeadHeaders";
import HeadFooter from "./HeadFooter"

import "../style/sass/Header.sass";


const Header = () => {  
    return (
      <div className="header">
        <HeadHeaders/>
        <Nav/>
        <HeadFooter/>
      </div>
    );
  }
  
  export default Header;