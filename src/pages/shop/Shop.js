import { NavLink } from "react-router-dom";
import Cookie from "../../components/Cookie";

import "../../assets/style/sass/Shop.sass";

function Shop() {
  return (
    <div className="shop">
      <Cookie />
      <div className="wrapper">
        <div className="text">
          <h1>Sklep</h1>
          <h2>Prace dopiero trwają...</h2>
        </div>
        <NavLink to="/">
          <div className="btnBack">
            <p> Powrót do strony głównej</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Shop;
