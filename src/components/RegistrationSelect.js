

import "../style/sass/RegistrationSelect.sass";


const RegistrationSelect = () => {
    return (
        <div className="registrationselect" >
            <div className="registrationselect__background">
                <button className="registrationselect__customer"><p>Konto Prywatne</p></button>
                <button className="registrationselect__company"><p>Konto Firmowe</p></button>
            </div>
        </div>
    );
}
  
  export default RegistrationSelect;