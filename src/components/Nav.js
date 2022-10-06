
// import logo from "../image/jpg/fan-icon.svg"

import "../style/sass/Nav.sass";

const Nav = () => {
    return (
    <div className="nav">
        <div className="nav__logo">
            {/* <img src={logo} alt="logo" /> */}
        </div>        
        <button class="nav__aboutBtn">
            <a href="#about">o firmie</a>
            <i class="fa fa-caret-down"></i>
        </button>        
        <button class="offerDD__btn">oferta
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="offerDD__dropdown">
            <a href="#1">Link 1</a>
            <a href="#2">Link 2</a>
            <a href="#3">Link 3</a>                   
        </div>
        <button class="nav__blogBtn">
            <a href="#blog">blog</a>
        </button>
        <button class="nav__contactBtn">
            <a href="#contact">kontakt</a>
        </button>
        <button class="nav__loginBtn">
            <a href="#login">zaloguj</a>
        </button>
    </div>
    );
  }
  
  export default Nav;