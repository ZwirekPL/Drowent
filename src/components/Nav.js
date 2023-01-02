import classNames from "classnames";
import { useState } from "react";
import useSticky from "./useSticky";
import usePosition from "./usePosition";

import logo from "../image/svg/vent.svg";

import "../style/sass/Nav.sass";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const [isActive, setActive] = useState(false);
  const { sticky, stickyRef } = useSticky();
  const { elRef, elSecondRef, finalY, finalX } = usePosition();

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      ref={stickyRef}
      className={classNames("nav", { sticky })}
      style={{
        display: props.display,
        height: sticky ? `${stickyRef.current?.clientHeight}px` : "10vh",
        width: props.width,
        gridTemplateColumns: props.navGridCol,
        gridTemplateRows: props.navGridRow,
        height: props.height,
        position: props.position,
        left: props.left,
        animation: props.animationMenu,
      }}
    >
      <div
        className="nav__logo"
        style={{
          gridArea: props.gArea1,
          height: props.heightHomeBtn,
          width: props.btnWidth,
          animation: props.animationHome,
          display: props.homeDisplay,
        }}
      >
        <NavLink className="link__logo" to="/">
          <i
            class="icon-home"
            style={{
              width: props.btnWidth,
              fontSize: props.fweight,
            }}
          ></i>
        </NavLink>
      </div>
      <NavLink
        className="link__about"
        to="/about"
        exact="true"
        style={{ gridArea: props.gArea2 }}
      >
        <button
          className="nav__aboutBtn"
          style={{
            height: props.btnHeight,
            width: props.btnWidth,
            animation: props.animationAbout,
            display: props.aboutDisplay,
          }}
        >
          <p>o firmie</p>
        </button>
      </NavLink>
      <button
        onClick={handleToggle}
        className={!isActive ? "offerDD__btn" : "offerDD__btn_active"}
        style={{
          gridArea: props.gArea3,
          height: props.btnHeight,
          width: props.btnWidth,
          animation: props.animationOffer,
          display: props.offerDisplay,
        }}
        ref={elRef}
      >
        <i class="icon-down-open"></i>
        <p>oferta</p>
      </button>
      <div
        className={
          !isActive ? "offerDD__dropdown_disabled" : "offerDD__dropdown"
        }
        ref={elSecondRef}
        style={{ top: `${finalY}px`, left: `${finalX}px` }}
      >
        <NavLink className="link__air" to="/air-conditioning">
          <div
            className="air__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>klimatyzacje</p>
          </div>
        </NavLink>
        <NavLink className="link__vent" to="/ventilation">
          <div
            className="vent__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>wentylacje</p>
          </div>
        </NavLink>
        <NavLink className="link__heat" to="/heat-pump">
          <div
            className="heat__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>pompy ciepła</p>
          </div>
        </NavLink>
        <NavLink className="link__recu" to="/recuperation">
          <div
            className="recu__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>rekuperacja</p>
          </div>
        </NavLink>
        <NavLink className="link__fire-protection" to="/fire-protection">
          <div
            className="fire__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>ppoż</p>
          </div>
        </NavLink>
        <NavLink className="link__shop" to="/shop">
          <div
            className="shop__p"
            style={{ height: props.btnHeight, width: props.btnWidth }}
          >
            <p>sklep</p>
          </div>
        </NavLink>
      </div>
      <NavLink
        className="link__blog"
        to="/blog"
        style={{ gridArea: props.gArea4 }}
      >
        <button
          className="nav__blogBtn"
          style={{
            height: props.btnHeight,
            width: props.btnWidth,
            animation: props.animationBlog,
            display: props.blogDisplay,
          }}
        >
          <p>blog</p>
        </button>
      </NavLink>
      <NavLink
        className="link__contact"
        to="/contact"
        style={{ gridArea: props.gArea5 }}
      >
        <button
          className="nav__contactBtn"
          style={{
            height: props.btnHeight,
            width: props.btnWidth,
            animation: props.animationContact,
            display: props.contactDisplay,
          }}
        >
          <p>kontakt</p>
        </button>
      </NavLink>
      <NavLink
        className="link__login"
        to="/login"
        style={{ gridArea: props.gArea6 }}
      >
        <button
          className="nav__loginBtn"
          style={{
            height: props.btnHeight,
            width: props.btnWidth,
            animation: props.animationLogin,
            display: props.loginDisplay,
          }}
        >
          <p>zaloguj</p>
        </button>
      </NavLink>
    </div>
  );
};

export default Nav;
