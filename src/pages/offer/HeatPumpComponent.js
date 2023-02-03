import aboutjpg from "../../assets/image/jpg/about/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../../assets/style/sass/HeatPumpComponent.sass";

const HeatPumpComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "Pompy Ciepła");
    sessionStorage.setItem("drowentContactPricing", "Wycena");
  };
  return (
    <article className="heatPumpComponent">
      <section className="heatPumpComponent__wrapper">
        <div className="heatPumpComponent__header">
          <h1>Pompy Ciepła</h1>
        </div>
        <div className="heatPumpComponent__main">
          <div className="heatPumpComponent__p">
            <h2>
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
            </h2>
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
