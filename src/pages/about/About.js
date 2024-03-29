import aboutjpg from "../../assets/image/jpg/about/ofirmie.jpg";
import { NavLink } from "react-router-dom";

import "../../assets/style/sass/About.sass";

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <h1>O Firmie</h1>
      </div>
      <div className="about__main">
        <div className="about__p">
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            autem rem culpa libero. Vel voluptas, possimus omnis illum
            reprehenderit autem cumque voluptatum, libero corrupti repellat
            temporibus tempore praesentium accusamus illo. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Minus autem rem culpa libero.
            Vel voluptas, possimus omnis illum reprehenderit autem cumque
            voluptatum, libero corrupti repellat temporibus tempore praesentium
            accusamus illo.
          </h2>
          <div className="about__btn">
            <NavLink to="/contact">
              <button className="about__pricing">
                <p>Darmowa Wycena</p>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="about__pic">
          <img src={aboutjpg} alt="Pictrue of company" itemprop="image" />
        </div>
      </div>
    </section>
  );
};

export default About;
