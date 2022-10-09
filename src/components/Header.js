import Nav from "./Nav";
import HeadHeaders from "./HeadHeaders";
import HeadFooter from "./HeadFooter"

import "../style/sass/Header.sass";

// import { stickyPoint } from './function/navbar';


const Header = () => {  
  // window.onscroll = function() {stickyPoint()};
    return (
      <div className="header">
        <HeadHeaders/>
        <Nav/>
        <HeadFooter/>
      </div>
    );
  }
  
  export default Header;