
import {useState} from 'react';

import "../style/sass/RegistrationSelect.sass";
import RegistrationCustomer from "./RegistrationCustomer";
import RegistrationCompany from "./RegistrationCompany";



const RegistrationSelect = () => {
    const [isCloseCustomer, setIsCloseCustomer] = useState(true);
    const [isCloseCompany, setIsCloseCompany] = useState(true);

    

   
    const handleCustomer = () =>{
        setIsCloseCustomer(!isCloseCustomer);
        setIsCloseCompany(true);       
        // console.log(`customer ${isCloseCustomer}`);
        // console.log(`company ${isCloseCompany}`);
    };

    const handleCompany = () =>{
        setIsCloseCompany(!isCloseCompany);
        setIsCloseCustomer(true);        
        // console.log(`customer ${isCloseCustomer}`);
        // console.log(`company ${isCloseCompany}`);
    };
    return (
        <div className="registrationselect" >
            <div className={!isCloseCustomer ^ !isCloseCompany ? "registrationselect__background-active" : "registrationselect__background" }>
                <div className={!isCloseCustomer ^ !isCloseCompany ? "registrationselect__btns-on" : "registrationselect__btns"}>
                    <button onClick={handleCustomer} className="registrationselect__customer"><p>Konto Prywatne</p></button>
                    <button onClick={handleCompany} className="registrationselect__company"><p>Konto Firmowe</p></button>
                </div>
                <div className="registrationselect__forms">
                    <div className={!isCloseCustomer ? "customer__active" : "customer__disable"}><RegistrationCustomer/></div>
                    <div className={!isCloseCompany ? "company__active": "company__disable"}><RegistrationCompany/></div>
                </div>
            </div>
        </div>
    );
}
  
  export default RegistrationSelect;