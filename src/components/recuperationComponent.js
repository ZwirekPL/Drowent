import aboutjpg from "../image/jpg/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../style/sass/recuperationComponent.sass";

const RecuperationComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "Rekuperacja");
    sessionStorage.setItem("drowentContactPricing", "Wycena");
  };
  return (
    <article className="recuperationComponent">
      <section className="recuperationComponent__wrapper">
        <div className="recuperationComponent__header">
          <h2>Rekuperacja</h2>
        </div>
        <div className="recuperationComponent__main">
          <div className="recuperationComponent__p">
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
            <nav className="recuperationComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="recuperationComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="recuperationComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default RecuperationComponent;
