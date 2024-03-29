import aboutjpg from "../../assets/image/jpg/about/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../../assets/style/sass/FireProtectionComponent.sass";

const FireProtectionComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "PPoż");
    sessionStorage.setItem("drowentContactPricing", "Wycena");
  };
  return (
    <article className="fireProtectionComponent">
      <section className="fireProtectionComponent__wrapper">
        <div className="fireProtectionComponent__header">
          <h1>Zabezpieczenia PPoż</h1>
        </div>
        <div className="fireProtectionComponent__main">
          <div className="fireProtectionComponent__p">
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
            <nav className="fireProtectionComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="fireProtectionComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="fireProtectionComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default FireProtectionComponent;
