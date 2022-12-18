import { useState } from "react";
import logo from "../image/svg/vent.svg";

import "../style/sass/hamburger.sass";

const Hamburger = () => {
  const [ventLeftRight, setVentLeftRight] = useState(false);
  const [VentVisible, setVentVisible] = useState(false);
  const [leftRightCloseMenu, setLeftRightCloseMenu] = useState(false);

  const handleButtonVent = () => {
    setVentLeftRight(!ventLeftRight);
    setTimeout(() => {
      setLeftRightCloseMenu(!leftRightCloseMenu);
    }, 2500);
    setTimeout(() => {
      setVentVisible(!VentVisible);
    }, 4000);
  };

  const handleButtonX = () => {
    setLeftRightCloseMenu(!leftRightCloseMenu);
    setVentLeftRight(!ventLeftRight);
    setTimeout(() => {
      setVentVisible(!VentVisible);
    }, 1000);
  };

  return (
    <div className="hamburger">
      <div
        className="vent"
        style={{
          zIndex: VentVisible ? "0" : "1",
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
        className="btn_close"
        style={{
          zIndex: VentVisible ? "1" : "0",
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
    </div>
  );
};

export default Hamburger;
