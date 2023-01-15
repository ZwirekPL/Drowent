import aboutjpg from "../image/jpg/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../style/sass/ventilationComponent.sass";

const VentilationComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "vent");
    sessionStorage.setItem("drowentContactPricing", "yes");
  };
  return (
    <div className="ventilationComponent">
      <div className="ventilationComponent__wrapper">
        <div className="ventilationComponent__header">
          <h2>Wentylacje</h2>
        </div>
        <div className="ventilationComponent__main">
          <div className="ventilationComponent__p">
            <h5>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              autem rem culpa libero. Vel voluptas, possimus omnis illum
              reprehenderit autem cumque voluptatum, libero corrupti repellat
              temporibus tempore praesentium accusamus illo. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Minus autem rem culpa
              libero. Vel voluptas, possimus omnis illum reprehenderit autem
              cumque voluptatum, libero corrupti repellat temporibus tempore
              praesentium accusamus illo. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem autem quae voluptatum
              molestias minima possimus consectetur optio. Nulla porro ut minus
              beatae at accusantium, officia architecto. Modi nobis numquam
              voluptate.
            </h5>
            <div className="ventilationComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="ventilationComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="ventilationComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentilationComponent;
