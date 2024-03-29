import aboutjpg from "../../assets/image/jpg/about/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../../assets/style/sass/AirConditioningComponent.sass";

const AirConditioningComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "Klimatyzacja");
    sessionStorage.setItem("drowentContactPricing", "Wycena");
  };
  return (
    <article className="airConditioningComponent">
      <section className="airConditioningComponent__wrapper">
        <div className="airConditioningComponent__header">
          <h1>Klimatyzacja</h1>
        </div>
        <div className="airConditioningComponent__main">
          <div className="airConditioningComponent__p">
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
            <nav className="airConditioningComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="airConditioningComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="airConditioningComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default AirConditioningComponent;
