import { useState } from "react";
import logo from "../image/svg/vent.svg";
import Nav from "./Nav";

import "../style/sass/hamburger.sass";

import classNames from "classnames";
import useSticky from "./useSticky";

const Hamburger = () => {
  const [ventLeftRight, setVentLeftRight] = useState(false);
  const [VentVisible, setVentVisible] = useState(false);
  const [leftRightCloseMenu, setLeftRightCloseMenu] = useState(false);
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);
  const { sticky, stickyRef } = useSticky();

  const handleButtonVent = () => {
    setTimeout(() => {
      setMobileMenuDisplay(!mobileMenuDisplay);
    }, 2200);
    setVentLeftRight(!ventLeftRight);
    setTimeout(() => {
      setLeftRightCloseMenu(!leftRightCloseMenu);
    }, 2500);
    setTimeout(() => {
      setVentVisible(!VentVisible);
    }, 4000);
  };

  const handleButtonX = () => {
    setTimeout(() => {
      setMobileMenuDisplay(!mobileMenuDisplay);
    }, 4000);
    setLeftRightCloseMenu(!leftRightCloseMenu);
    setVentLeftRight(!ventLeftRight);
    setTimeout(() => {
      setVentVisible(!VentVisible);
    }, 2600);
  };

  return (
    <div ref={stickyRef} className={classNames("hamburger", { sticky })}>
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
          width={"12rem"}
          height={"18rem"}
          position={"relative"}
          navGridCol={"repeat(2rem, 1fr"}
          navGridRow={"repeat(6,  1fr)"}
          gArea1={"1 / 2 / 2 / 3"}
          gArea2={"1 / 1 / 2 / 2"}
          gArea3={"2 / 1 / 3 / 2"}
          gArea4={"3 / 1 / 4 / 2"}
          gArea5={"4 / 1 / 5 / 2"}
          gArea6={"5 / 1 / 6 / 2"}
          gArea7={"6 / 1 / 7 / 2"}
          btnHeight={"6vh"}
          btnWidth={"6rem"}
          fweight={"2rem"}
          heightHomeBtn={"10vh"}
          marginLeft={"1.5rem"}
        />
      </div>
    </div>
  );
};

export default Hamburger;
