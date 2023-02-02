import { Link } from "react-router-dom";
import "../style/sass/SwiperHeader.sass";

const swiperHeader = () => {
  return (
    <nav className="swiper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-general">
              <div
                className="gallery-wrap wrap-effect-1"
                itemprop="hasOfferCatalog"
                itemscope
                itemtype="https://schema.org/OfferCatalog"
              >
                <Link to="/air-conditioning" exact="true">
                  <div
                    className="item"
                    itemprop="itemOffered"
                    itemscope
                    itemtype="https://schema.org/Service"
                  >
                    <span itemprop="name">Klimatyzacje</span>
                  </div>
                </Link>
                <Link to="/ventilation" exact="true">
                  <div
                    className="item"
                    itemprop="itemOffered"
                    itemscope
                    itemtype="https://schema.org/Service"
                  >
                    <span itemprop="name">Wentylacje</span>
                  </div>
                </Link>
                <Link to="/heat-pump" exact="true">
                  <div
                    className="item"
                    itemprop="itemOffered"
                    itemscope
                    itemtype="https://schema.org/Service"
                  >
                    <span itemprop="name">Pompy Ciepła</span>
                  </div>
                </Link>
                <Link to="/recuperation" exact="true">
                  <div
                    className="item"
                    itemprop="itemOffered"
                    itemscope
                    itemtype="https://schema.org/Service"
                  >
                    <span itemprop="name">Rekuperacja</span>
                  </div>
                </Link>
                <Link to="/fire-protection" exact="true">
                  <div
                    className="item"
                    itemprop="itemOffered"
                    itemscope
                    itemtype="https://schema.org/Service"
                  >
                    <span itemprop="name">Ppoż</span>
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
