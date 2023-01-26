import aboutjpg from "../image/jpg/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../style/sass/heatPumpComponent.sass";

const HeatPumpComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "heat");
    sessionStorage.setItem("drowentContactPricing", "yes");
  };
  return (
    <article className="heatPumpComponent">
      <section className="heatPumpComponent__wrapper">
        <div className="heatPumpComponent__header">
          <h2>Pompy Ciepła</h2>
        </div>
        <div className="heatPumpComponent__main">
          <div className="heatPumpComponent__p">
            <h3>
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
            </h3>
            <nav className="heatPumpComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="heatPumpComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="heatPumpComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default HeatPumpComponent;
