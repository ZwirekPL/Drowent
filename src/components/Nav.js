import classNames from "classnames";
import useSticky from "./useSticky";
import usePosition from "./positionDD";

// import logo from "../image/jpg/fan-icon.svg"

import "../style/sass/Nav.sass";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const { sticky, stickyRef } = useSticky();
    const { finalY, btnRef } = usePosition();
    

    return (
    <div 
    ref={stickyRef}
    className={classNames("nav", { sticky })}
    style={
        {height: sticky ? `${stickyRef.current?.clientHecight}px` : "0px",
        }}>
        <div className="nav__logo">
            <NavLink className="link__logo" to="/">
                <p>LOGO</p>
                {/* <img src={logo} alt="logo" /> */}
            </NavLink>
        </div>        
        <button className="nav__aboutBtn">
            <NavLink className="link__about" to="about">
                <p>o firmie</p>
            </NavLink>
        </button>        
        <button className="offerDD__btn" ref={btnRef}>
            <NavLink className="link__offer" to="offer">
                <p>oferta</p>
                <i className="fa fa-caret-down"></i>
            </NavLink>            
        </button>
        <div className="offerDD__dropdown"
        style={
        {top: `${finalY}px`,
        }}>
            <NavLink className="link__air" to="air-conditioning">
                <div className="air__p">
                    <p>klimatyzacje</p>
                </div>
            </NavLink>
            <NavLink className="link__vent" to="ventilation">
                <div className="vent__p">
                    <p>wentylacje</p>
                </div>           
            </NavLink>
            <NavLink className="link__heat" to="heat-pump">
                <div className="heat__p">
                    <p>pompy ciepła</p>
                </div>
            </NavLink>
            <NavLink className="link__recu" to="recuperation">
                <div className="recu__p">
                    <p>rekuperacja</p>
                </div>   
            </NavLink>
            <NavLink className="link__shop" to="shop">
                <div className="shop__p">
                    <p>sklep</p>
                </div> 
            </NavLink>                
        </div>
        <button className="nav__blogBtn">
            <NavLink className="link__blog" to="blog">
                <p>blog</p>
            </NavLink>
        </button>
        <button className="nav__contactBtn">
            <NavLink className="link__contact" to="contact">
                <p>kontakt</p>
            </NavLink>
            
        </button>
        <button className="nav__loginBtn">
            <NavLink className="link__login" to="login">
                <p>zaloguj</p>
            </NavLink>
            
        </button>
    </div>
    );
  }
  
  export default Nav;