import aboutjpg from "../image/jpg/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../style/sass/airConditioningComponent.sass";

const AirConditioningComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "air");
    sessionStorage.setItem("drowentContactPricing", "yes");
  };
  return (
    <div className="airConditioningComponent">
      <div className="airConditioningComponent__wrapper">
        <div className="airConditioningComponent__header">
          <h2>Klimatyzacja</h2>
        </div>
        <div className="airConditioningComponent__main">
          <div className="airConditioningComponent__p">
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
            <div className="airConditioningComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="airConditioningComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="airConditioningComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditioningComponent;
