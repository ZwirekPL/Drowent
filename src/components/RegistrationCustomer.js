

import "../style/sass/RegistrationCustomer.sass";

const RegistrationCustomer = () => {
    return (
        <div className="registrationCustomer">
            <div className="registrationCustomer__forms">
                <div className="registrationCustomer__sign">                    
                    <form action="#">
                        <h2>Zarejestruj</h2>
			            <span>Konto Prywatne</span>
                        <div className="registrationCustomer__input">
                            <label htmlFor="email">E-mail</label>
			                <input type="email" placeholder="Email" />
                            <label htmlFor="password">Hasło</label>
			                <input type="password" placeholder="Hasło" />
                            <label htmlFor="password">Powtórz Hasło</label>
			                <input type="password" placeholder="Hasło" />
                        </div>
			            <button className="registrationCustomer__signup"><p>Wyślij</p></button>
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default RegistrationCustomer;