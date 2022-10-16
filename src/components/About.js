
import aboutjpg from "../image/jpg/ofirmie.jpg"

import "../style/sass/About.sass";

const About = () => {
    return (
      <div className="about">
        <div className="about__header">
          <h2>O Firmie</h2>
        </div>
        <div className="about__main">
          <div className="about__p">
            <h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            autem rem culpa libero. Vel voluptas, possimus omnis illum
            reprehenderit autem cumque voluptatum, libero corrupti repellat
            temporibus tempore praesentium accusamus illo. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Minus autem rem culpa libero.
            Vel voluptas, possimus omnis illum reprehenderit autem cumque
            voluptatum, libero corrupti repellat temporibus tempore praesentium
            accusamus illo.
            </h5>
            <div className="about__btn">
              <button className="about__pricing">Darmowa Wycena</button>            
            </div>
          </div>
          <div className="about__pic">
            <img src={aboutjpg} alt="Pictrue of company" />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;