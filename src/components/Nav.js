import classNames from "classnames";
import {useState} from 'react';
import useSticky from "./useSticky";
import usePosition from "./usePosition";

// import logo from "../image/jpg/fan-icon.svg"

import "../style/sass/Nav.sass";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [isActive, setActive] = useState("false");
    const { sticky, stickyRef } = useSticky();
    const { elRef, elSecondRef,finalY, finalX } = usePosition();
    
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
    <div 
    ref={stickyRef}
    className={classNames("nav", { sticky })}
    style={
        {height: sticky ? `${stickyRef.current?.clientHeight}px` : "10vh",
        }}>
        <div className="nav__logo">
            <NavLink className="link__logo" to="/">
                <p>LOGO</p>
                {/* <img src={logo} alt="logo" /> */}
            </NavLink>
        </div>        
        <button className="nav__aboutBtn">
            <NavLink className="link__about" to="/about" exact="true">
                <p>o firmie</p>
            </NavLink>
        </button>        
        <button onClick={handleToggle} className={isActive ? "offerDD__btn" : "offerDD__btn_active"} ref={elRef}>
            <i class="icon-down-open"></i>            
            <p>oferta</p>
        </button>
        <div className={isActive ? "offerDD__dropdown_disabled" : "offerDD__dropdown"}
        ref={elSecondRef}
        style={
        {top: `${finalY}px`,
        left: `${finalX}px`,
        }}>
            <NavLink className="link__air" to="/air-conditioning">
                <div className="air__p">
                    <p>klimatyzacje</p>
                </div>
            </NavLink>
            <NavLink className="link__vent" to="/ventilation">
                <div className="vent__p">
                    <p>wentylacje</p>
                </div>           
            </NavLink>
            <NavLink className="link__heat" to="/heat-pump">
                <div className="heat__p">
                    <p>pompy ciepła</p>
                </div>
            </NavLink>
            <NavLink className="link__recu" to="/recuperation">
                <div className="recu__p">
                    <p>rekuperacja</p>
                </div>   
            </NavLink>
            <NavLink className="link__fire-protection" to="/fire-protection">
                <div className="fire__p">
                    <p>ppoż</p>
                </div>   
            </NavLink>
            <NavLink className="link__shop" to="/shop">
                <div className="shop__p">
                    <p>sklep</p>
                </div> 
            </NavLink>                
        </div>
        <button className="nav__blogBtn">
            <NavLink className="link__blog" to="/blog">
                <p>blog</p>
            </NavLink>
        </button>
        <button className="nav__contactBtn">
            <NavLink className="link__contact" to="/contact">
                <p>kontakt</p>
            </NavLink>
            
        </button>
        <button className="nav__loginBtn">
            <NavLink className="link__login" to="/login">
                <p>zaloguj</p>
            </NavLink>
            
        </button>
    </div>
    );
  }
  
  export default Nav;