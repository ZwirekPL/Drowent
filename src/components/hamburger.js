import { useState } from "react";
import logo from "../image/svg/vent.svg";

import "../style/sass/hamburger.sass";

const Hamburger = () => {
  const [isActive, setActive] = useState("false");

  const handleButton = () => {
    setActive(!isActive);
  };

  return (
    <div className="hamburger">
      <div className="vent">
        <img
          className={isActive ? "display" : "no-display"}
          onClick={handleButton}
          style={{
            animation: !isActive
              ? ""
              : "vent_1_to_0_left 4s cubic-bezier(1, 0.08, 0.89, 0.8) .1s 1 normal",
          }}
          src={logo}
          alt="svg pictrue of fan"
        />
      </div>
      <div className="btn_close">
        <button
          onClick={handleButton}
          className={isActive ? "non-visible" : "visible"}
        >
          <i className="icon-cancel"></i>
        </button>
      </div>
    </div>
  );
};

export default Hamburger;
