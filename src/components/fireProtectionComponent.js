
import aboutjpg from "../image/jpg/ofirmie.jpg"

import "../style/sass/fireProtectionComponent.sass";

const FireProtectionComponent = () => {
    return (
      <div className="fireProtectionComponent">
        <div className="fireProtectionComponent__wrapper">     
          <div className="fireProtectionComponent__header">
            <h2>Zabezpieczenia PPoż</h2>
          </div>
          <div className="fireProtectionComponent__main">
            <div className="fireProtectionComponent__p">
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
              <div className="fireProtectionComponent__btn">
                <button className="fireProtectionComponent__pricing"><p>Darmowa Wycena</p></button>            
              </div>
            </div>
            <div className="fireProtectionComponent__pic">
              <img src={aboutjpg} alt="Pictrue of company" />
            </div>
          </div>
        </div> 
      </div>
    );
  }
  
  export default FireProtectionComponent;