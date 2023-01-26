import { Link } from "react-router-dom";
import "../style/sass/swiperHeader.sass";

const swiperHeader = () => {
  return (
    <nav className="swiper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-general">
              <div className="gallery-wrap wrap-effect-1">
                <Link to="/air-conditioning" exact="true">
                  <div className="item">
                    <span>Klimatyzacje</span>
                  </div>
                </Link>
                <Link to="/ventilation" exact="true">
                  <div className="item">
                    <span>Wentylacje</span>
                  </div>
                </Link>
                <Link to="/heat-pump" exact="true">
                  <div className="item">
                    <span>Pompy Ciepła</span>
                  </div>
                </Link>
                <Link to="/recuperation" exact="true">
                  <div className="item">
                    <span>Rekuperacja</span>
                  </div>
                </Link>
                <Link to="/fire-protection" exact="true">
                  <div className="item">
                    <span>Ppoż</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default swiperHeader;
