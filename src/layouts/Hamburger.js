import { useState, useEffect } from "react";
import logo from "../assets/image/svg/hamburger/vent.svg";
import Nav from "./Nav";
import Tooltip from "./Tooltip";

import "../assets/style/sass/Hamburger.sass";

import classNames from "classnames";
import useSticky from "../hooks/useSticky";

const Hamburger = () => {
  const { sticky, stickyRef } = useSticky();
  const [ventLeftRight, setVentLeftRight] = useState(false);
  const [VentVisible, setVentVisible] = useState(false);
  const [leftRightCloseMenu, setLeftRightCloseMenu] = useState(false);
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);

  const [homeVisible, setHomeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [toolTipHidden, setToolTipHidden] = useState(false);
  const [toolTipVisible, setToolTipVisible] = useState("hidden");

  const cookieToolTip = sessionStorage.getItem("drowentBurgerClick", "YES");
  const handleToolTip = () => {
    if (cookieToolTip) setToolTipHidden(true);
    else
      setTimeout(() => {
        setToolTipVisible("visible");
      }, 3500);
  };
  useEffect(() => {
    handleToolTip();
  }, []);

  const handleButtonVent = () => {
    setVentLeftRight(!ventLeftRight);
    setToolTipHidden(true);
    sessionStorage.setItem("drowentBurgerClick", "YES");
    setTimeout(() => {
      setMobileMenuDisplay(!mobileMenuDisplay);
      setHomeVisible(!homeVisible);
    }, 500);
    setTimeout(() => {
      setAboutVisible(!aboutVisible);
    }, 1000);
    setTimeout(() => {
      setOfferVisible(!offerVisible);
    }, 1500);
    setTimeout(() => {
      setBlogVisible(!blogVisible);
    }, 2000);
    setTimeout(() => {
      setContactVisible(!contactVisible);
    }, 2500);
    setTimeout(() => {
      setLoginVisible(!loginVisible);
    }, 3000);

    setTimeout(() => {
      setLeftRightCloseMenu(!leftRightCloseMenu);
    }, 1200);
    setTimeout(() => {
      setVentVisible(!VentVisible);
      // setMenuVisible(!menuVisible);
    }, 3000);
  };

  const handleButtonX = () => {
    setTimeout(() => {
      setHomeVisible(!homeVisible);
    }, 500);
    setTimeout(() => {
      setAboutVisible(!aboutVisible);
    }, 1000);
    setTimeout(() => {
      setOfferVisible(!offerVisible);
    }, 1500);
    setTimeout(() => {
      setBlogVisible(!blogVisible);
    }, 2000);
    setTimeout(() => {
      setContactVisible(!contactVisible);
    }, 2500);
    setTimeout(() => {
      setLoginVisible(!loginVisible);
    }, 3000);
    setLeftRightCloseMenu(!leftRightCloseMenu);
    setVentLeftRight(!ventLeftRight);
    setTimeout(() => {
      setVentVisible(!VentVisible);
      // setMenuVisible(!menuVisible);
    }, 1600);
    setTimeout(() => {
      setMobileMenuDisplay(!mobileMenuDisplay);
    }, 3000);
  };

  const home = homeVisible ? "homeDown" : "homeUp";
  const about = aboutVisible ? "aboutDown" : "aboutUp";
  const offer = offerVisible ? "offerDown" : "offerUp";
  const blog = blogVisible ? "blogDown" : "blogUp";
  const contact = contactVisible ? "contactDown" : "contactUp";
  const login = loginVisible ? "loginDown" : "loginUp";
  const menuAnimation = ventLeftRight ? "menuOn" : "menuOff";

  return (
    <nav ref={stickyRef} className={classNames("hamburger", { sticky })}>
      {toolTipHidden ? null : <Tooltip visible={toolTipVisible} />}
      <div
        ref={stickyRef}
        className={classNames("vent", { sticky })}
        style={{
          zIndex: VentVisible ? "0" : "3",
        }}
      >
        <img
          className={ventLeftRight ? "ventLeftDirection" : "ventRightDirection"}
          onClick={handleButtonVent}
          style={{
            visibility: VentVisible ? "hidden" : "visible",
          }}
          src={logo}
          alt="svg pictrue of fan"
        />
      </div>
      <div
        ref={stickyRef}
        className={classNames("btn_close", { sticky })}
        style={{
          zIndex: VentVisible ? "3" : "0",
        }}
      >
        <button
          onClick={handleButtonX}
          className={leftRightCloseMenu ? "rightDirectionX" : "leftDirectionX"}
          style={{
            visibility: VentVisible ? "visible" : "hidden",
          }}
        >
          <i className="icon-cancel"></i>
        </button>
      </div>
      <div ref={stickyRef} className={classNames("menuBody", { sticky })}>
        <Nav
          display={mobileMenuDisplay ? "grid" : "none"}
          width={"100vw"}
          height={loginVisible ? "90vh" : "3rem"}
          position={"relative"}
          left={"6%"}
          navGridCol={"100%"}
          navGridRow={"repeat(6,  1fr)"}
          gArea1={"1 / 1 / 2 / 2"}
          gArea2={"2 / 1 / 3 / 2"}
          gArea3={"3 / 1 / 4 / 2"}
          gArea4={"4 / 1 / 5 / 2"}
          gArea5={"5 / 1 / 6 / 2"}
          gArea6={"6 / 1 / 7 / 2"}
          gArea7={"7 / 1 / 8 / 2"}
          btnHeight={"6vh"}
          btnWidth={"100%"}
          fweight={"2rem"}
          heightHomeBtn={"10vh"}
          animationHome={` ${home} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationAbout={`${about} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationOffer={` ${offer} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationBlog={` ${blog} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationContact={` ${contact} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationLogin={` ${login} .4s cubic-bezier(1, 0.05, 1, 0.5) 0s 1 normal `}
          animationMenu={` ${menuAnimation} 4s linear 0.1s 1 normal `}
          homeDisplay={homeVisible ? "block" : "none"}
          aboutDisplay={aboutVisible ? "block" : "none"}
          offerDisplay={offerVisible ? "block" : "none"}
          blogDisplay={blogVisible ? "block" : "none"}
          contactDisplay={contactVisible ? "block" : "none"}
          loginDisplay={loginVisible ? "block" : "none"}
        />
      </div>
    </nav>
  );
};

export default Hamburger;
