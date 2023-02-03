import { Link } from "react-router-dom";
import Login from "./Login";

import "../../assets/style/sass/LoginComponent.sass";

const LoginComponent = () => {
  return (
    <div className="loginComponent">
      <nav className="loginComponent__btns">
        <Link className="link__about" to="/signup" exact="true">
          <button className="loginComponent__btn-singin">
            <p>Zarejestruj</p>
          </button>
        </Link>
        <Link className="link__about" to="/login" exact="true">
          <button className="loginComponent__btn-login">
            <p>Zaloguj</p>
          </button>
        </Link>
      </nav>
      <Login />
    </div>
  );
};
export default LoginComponent;
