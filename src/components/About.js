import aboutjpg from "../image/jpg/ofirmie.jpg";

import "../style/sass/About.sass";

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <h2>O Firmie</h2>
      </div>
      <div className="about__main">
        <div className="about__p">
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            autem rem culpa libero. Vel voluptas, possimus omnis illum
            reprehenderit autem cumque voluptatum, libero corrupti repellat
            temporibus tempore praesentium accusamus illo. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Minus autem rem culpa libero.
            Vel voluptas, possimus omnis illum reprehenderit autem cumque
            voluptatum, libero corrupti repellat temporibus tempore praesentium
            accusamus illo.
          </h3>
          <div className="about__btn">
            <button className="about__pricing">
              <p>Darmowa Wycena</p>
            </button>
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
