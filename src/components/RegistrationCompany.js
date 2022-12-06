

import "../style/sass/RegistrationCompany.sass";

const RegistrationCompany = () => {
    return (
        <div className="registrationcompany">
            <div className="registrationcompany__forms">
                <div className="registrationcompany__sign">                    
                    <form action="#">
                        <h2>Zarejestruj</h2>
			            <span>Konto Firmowe</span>
                        <div className="registrationcompany__input">
			                <input type="email" placeholder="Email" />
			                <input type="password" placeholder="Hasło" />
			                <input type="password" placeholder="Hasło" />
			                <input type="text" placeholder="Numer NIP" />
                        </div>
			            <button className="registrationcompany__signup"><p>Wyślij</p></button>
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default RegistrationCompany;