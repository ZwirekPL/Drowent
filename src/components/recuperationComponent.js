import aboutjpg from "../image/jpg/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../style/sass/recuperationComponent.sass";

const RecuperationComponent = () => {
  const handleAirBtn = () => {
    sessionStorage.setItem("drowentContactSelected", "recup");
    sessionStorage.setItem("drowentContactPricing", "yes");
  };
  return (
    <div className="recuperationComponent">
      <div className="recuperationComponent__wrapper">
        <div className="recuperationComponent__header">
          <h2>Rekuperacja</h2>
        </div>
        <div className="recuperationComponent__main">
          <div className="recuperationComponent__p">
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
            <div className="recuperationComponent__btn">
              <NavLink onClick={handleAirBtn} to="/contact">
                <button className="recuperationComponent__pricing">
                  <p>Darmowa Wycena</p>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="recuperationComponent__pic">
            <img src={aboutjpg} alt="Pictrue of company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperationComponent;
