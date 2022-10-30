

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
                            <label htmlFor="email">E-mail</label>
			                <input type="email" placeholder="Email" />
                            <label htmlFor="password">Hasło</label>
			                <input type="password" placeholder="Hasło" />
                            <label htmlFor="password">Powtórz Hasło</label>
			                <input type="password" placeholder="Hasło" />
                            <label htmlFor="nip">Numer NIP</label>
			                <input type="text" placeholder="numer NIP" />
                        </div>
			            <button className="registrationcompany__signup"><p>Zaloguj</p></button>
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default RegistrationCompany;