import classNames from "classnames";
import {useState} from 'react';
import useSticky from "./useSticky";
import usePosition from "./usePosition";

import logo from "../image/svg/vent.svg"

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
            <img src={logo} alt="svg pictrue of fan" />
            </NavLink>
        </div>
        <NavLink className="link__about" to="/about" exact="true">        
            <button className="nav__aboutBtn">            
                <p>o firmie</p>            
            </button> 
        </NavLink>       
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
        <NavLink className="link__blog" to="/blog">
            <button className="nav__blogBtn">            
                <p>blog</p>           
            </button>
        </NavLink>
        
        <NavLink className="link__contact" to="/contact">
            <button className="nav__contactBtn">
                <p>kontakt</p>            
            </button>
        </NavLink>
        <NavLink className="link__login" to="/login">
            <button className="nav__loginBtn">            
                <p>zaloguj</p>            
            </button>
        </NavLink>
    </div>
    );
  }
  
  export default Nav;