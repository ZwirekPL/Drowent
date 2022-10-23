
import { Link } from "react-router-dom";
import "../style/sass/LoginComponent.sass";
import Login from "./Login";

const LoginComponent = () => {
    return (
        <div className="loginComponent">
            <div className="loginComponent__btns">
            <Link className="link__about" to="/signup" exact="true">
                <button className="loginComponent__btn-singin"><p>Zarejestruj</p></button>
            </Link>
            <Link className="link__about" to="/login" exact="true">
                <button className="loginComponent__btn-login"><p>Zaloguj</p></button>
            </Link>
            </div>
            <Login/>
        </div>
    );
}  
export default LoginComponent;