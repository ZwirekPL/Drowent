import aboutjpg from "../../assets/image/jpg/about/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../../assets/style/sass/VentilationComponent.sass";

const VentilationComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "Wentylacja");
    sessionStorage.setItem("drowentContactPricing", "Wycena");
  };
  return (
    <article className="ventilationComponent">
      <section className="ventilationComponent__wrapper">
        <div className="ventilationComponent__header">
          <h1>Wentylacje</h1>
        </div>
        <div className="ventilationComponent__main">
          <div className="ventilationComponent__p">
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
            <nav className="ventilationComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="ventilationComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="ventilationComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default VentilationComponent;
