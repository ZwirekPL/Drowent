
import {useState} from 'react';

import "../style/sass/RegistrationSelect.sass";
import RegistrationCustomer from "./RegistrationCustomer";
import RegistrationCompany from "./RegistrationCompany";



const RegistrationSelect = () => {
    const [activeCustomer, setActiveCustomer] = useState("false");
    const [activeCompany, setActiveCompany] = useState("false");

    const [anyActive, setAnyActive] = useState("false")

    const activeChecker = () =>{
        if(activeCustomer === "true")
        {setAnyActive(!anyActive);
        console.log(anyActive)}
    }
    const handleCustomer = () =>{
        setActiveCustomer(!activeCustomer);
    }
    const handleCompany = () =>{
        setActiveCompany(!activeCompany);
    }
    return (
        <div className="registrationselect" >
            <div className={activeCustomer ? "registrationselect__background" : "registrationselect__background-active" }>
                <div className={activeCustomer ? "registrationselect__btns" : "registrationselect__btns-on"}>
                    <button onClick={handleCustomer} className={activeCustomer ? "registrationselect__customer-active" : "registrationselect__customer-disable" }><p>Konto Prywatne</p></button>
                    <button onClick={handleCompany} className="registrationselect__company"><p>Konto Firmowe</p></button>
                </div>
                <div className="registrationselect__forms">
                    <div className={!activeCustomer ? "customer__active" : "customer__disable"}><RegistrationCustomer/></div>
                    <div className={!activeCompany ? "company__active" : "company__disable"}><RegistrationCompany/></div>
                </div>
            </div>
        </div>
    );
}
  
  export default RegistrationSelect;