
import { Link } from "react-router-dom";
import "../style/sass/SignComponent.sass";
import RegistrationSelect from "./RegistrationSelect";

const SignComponent = () => {
    return (
        
        <div className="signComponent">
            <div className="signComponent__btns" >
            <Link className="link__about" to="/signup" exact="true">
                <button className="signComponent__btn-singin"><p>Zarejestruj</p></button>
            </Link>
            <Link className="link__about" to="/login" exact="true">
                <button className="signComponent__btn-login"><p>Zaloguj</p></button>
            </Link>
            </div>
            <RegistrationSelect/>
        </div>
    );
}  
export default SignComponent;