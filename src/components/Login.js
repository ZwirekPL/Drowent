

import "../style/sass/Login.sass";

const Login = () => {
    return (
        <div className="login">
            <div className="login__forms">
                <div className="login__login">                    
                    <form action="#">
                        <h2>Zaloguj</h2>
			            <div className="login__social">
                            <a href="https://pl-pl.facebook.com/" className="login__icon">
                                <i className="icon-facebook-squared"></i>
                            </a>
                            <a href="https://www.instagram.com/" className="login__icon">
                                <i className="icon-instagram"></i>
                            </a>
                            <a href="https://pl.linkedin.com/" className="login__icon">
                                <i className="icon-linkedin-squared"></i>
                            </a>
			            </div>
			            <span>albo użyj email do zalogowania</span>
                        <div className="login__input">
                            
			                <input type="email" placeholder="Email" />
                            
			                <input type="password" placeholder="Hasło" />
                        </div>
                        <button className="login__forgot"><p>zapomniałeś hasła ?</p></button>
			            <button className="login__signup"><p>Zaloguj</p></button>
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default Login;