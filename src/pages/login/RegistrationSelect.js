import { useState } from "react";
import RegistrationCustomer from "./RegistrationCustomer";
import RegistrationCompany from "./RegistrationCompany";

import "../../assets/style/sass/RegistrationSelect.sass";

const RegistrationSelect = () => {
  const [isCloseCustomer, setIsCloseCustomer] = useState(true);
  const [isCloseCompany, setIsCloseCompany] = useState(true);

  const handleCustomer = () => {
    setIsCloseCustomer(!isCloseCustomer);
    setIsCloseCompany(true);
    // console.log(`customer ${isCloseCustomer}`);
    // console.log(`company ${isCloseCompany}`);
  };

  const handleCompany = () => {
    setIsCloseCompany(!isCloseCompany);
    setIsCloseCustomer(true);
    // console.log(`customer ${isCloseCustomer}`);
    // console.log(`company ${isCloseCompany}`);
  };
  return (
    <div className="registrationselect">
      <div
        className={
          !isCloseCustomer ^ !isCloseCompany
            ? "registrationselect__background-active"
            : "registrationselect__background"
        }
      >
        <nav
          className={
            !isCloseCustomer ^ !isCloseCompany
              ? "registrationselect__btns-on"
              : "registrationselect__btns"
          }
        >
          <button
            onClick={handleCustomer}
            className="registrationselect__customer"
          >
            <p>Konto Prywatne</p>
          </button>
          <button
            onClick={handleCompany}
            className="registrationselect__company"
          >
            <p>Konto Firmowe</p>
          </button>
        </nav>
        <article className="registrationselect__forms">
          <section
            className={
              !isCloseCustomer ? "customer__active" : "customer__disable"
            }
          >
            <RegistrationCustomer />
          </section>
          <section
            className={!isCloseCompany ? "company__active" : "company__disable"}
          >
            <RegistrationCompany />
          </section>
        </article>
      </div>
    </div>
  );
};

export default RegistrationSelect;
