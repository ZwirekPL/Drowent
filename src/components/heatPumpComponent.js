
import aboutjpg from "../image/jpg/ofirmie.jpg"

import "../style/sass/heatPumpComponent.sass";

const HeatPumpComponent = () => {
    return (
      <div className="heatPumpComponent">
        <div className="heatPumpComponent__wrapper">     
          <div className="heatPumpComponent__header">
            <h2>Pompy Ciepła</h2>
          </div>
          <div className="heatPumpComponent__main">
            <div className="heatPumpComponent__p">
              <h5>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              autem rem culpa libero. Vel voluptas, possimus omnis illum
              reprehenderit autem cumque voluptatum, libero corrupti repellat
              temporibus tempore praesentium accusamus illo. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Minus autem rem culpa libero.
              Vel voluptas, possimus omnis illum reprehenderit autem cumque
              voluptatum, libero corrupti repellat temporibus tempore praesentium
              accusamus illo.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem autem quae voluptatum molestias minima possimus consectetur optio. Nulla porro ut minus beatae at accusantium, officia architecto. Modi nobis numquam voluptate.
              </h5>
              <div className="heatPumpComponent__btn">
                <button className="heatPumpComponent__pricing"><p>Darmowa Wycena</p></button>            
              </div>
            </div>
            <div className="heatPumpComponent__pic">
              <img src={aboutjpg} alt="Pictrue of company" />
            </div>
          </div>
        </div> 
      </div>
    );
  }
  
  export default HeatPumpComponent;