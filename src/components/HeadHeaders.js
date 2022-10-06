
import "../style/sass/HeadHeaders.sass";

const HeadHeaders = () => {
    return (
    <div className="headheaders">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="container-general">
                        <div class="gallery-wrap wrap-effect-1">
                            <div class="item"><span>Klimatyzacje</span><button className="pricing__btn">poproś o wycenę</button></div>
                            <div class="item"><span>Wentylacje</span><button className="pricing__btn">poproś o wycenę</button></div>
                            <div class="item"><span>Pompy Ciepła</span><button className="pricing__btn">poproś o wycenę</button></div>
                            <div class="item"><span>Rekuperacja</span><button className="pricing__btn">poproś o wycenę</button></div>
                            <div class="item"><span>ppoż</span><button className="pricing__btn">poproś o wycenę</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default HeadHeaders;