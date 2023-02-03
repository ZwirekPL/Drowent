import { Link } from "react-router-dom";
import RegistrationSelect from "./RegistrationSelect";

import "../../assets/style/sass/SignComponent.sass";

const SignComponent = () => {
  return (
    <main className="signComponent">
      <nav className="signComponent__btns">
        <Link className="link__about" to="/signup" exact="true">
          <button className="signComponent__btn-singin">
            <p>Zarejestruj</p>
          </button>
        </Link>
        <Link className="link__about" to="/login" exact="true">
          <button className="signComponent__btn-login">
            <p>Zaloguj</p>
          </button>
        </Link>
      </nav>
      <RegistrationSelect />
    </main>
  );
};
export default SignComponent;
