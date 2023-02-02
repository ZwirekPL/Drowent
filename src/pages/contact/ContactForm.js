import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SendSuccess from "../../layouts/SendSuccessComponent";

import "../../assets/style/sass/ContactForm.sass";

const validate = (contactData) => {
  const errorsArray = [];
  // console.log(contactData.message.length);
  // console.log(contactData.message);
  // console.log(contactData.name);
  // console.log(contactData.name.length);
  if (contactData.name.length < 2) {
    errorsArray.push("imię jest za krótkie");
  }
  if (!contactData.lastName) {
    errorsArray.push("Musisz podać nazwisko");
  }
  if (contactData.lastName.length < 2) {
    errorsArray.push("Nazwisko jest za krótkie");
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)) {
    errorsArray.push("E-mail jest niepoprawny");
  }
  if (contactData.phone.length < 9) {
    errorsArray.push("Numer telefonu za krótki");
  }
  if (contactData.phone.length > 12) {
    errorsArray.push("Numer telefonu za długi");
  }
  if (contactData.message.length < 30) {
    errorsArray.push("Wiadomość wymaga minimum 30 znaków");
  }
  if (contactData.message.length > 250) {
    errorsArray.push("Wiadomość jest za długa. Max 250 znaków.");
  }
  if (errorsArray.length !== 0) {
    console.log(errorsArray);
    return errorsArray;
  } else {
    return false;
  }
};

const ContactForm = (props) => {
  const whichSelected = sessionStorage.getItem("drowentContactSelected");
  const pricingSelected = sessionStorage.getItem("drowentContactPricing");

  const initialFormState = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    guest: "",
    category: whichSelected || "",
    subject: pricingSelected || "",
    message: "",
  };
  const [formSubmited, setFormSubmited] = useState(false);
  const [contactData, setContactData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);
  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validate(contactData);
    if (errorMessage) {
      setError(errorMessage);
      return console.log("error", errorMessage[1]);
    } else {
      console.log("form submitted", contactData);
      // console.log("error", error[0], error);
      setFormSubmited(true);
      setError(null);
      setTimeout(function () {
        setFormSubmited(false);
      }, 2000);
      emailjs
        .sendForm("service_0cfy20e", "drowent", e.target, "4Zcy7dLJxvPvP2HtJ")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setContactData({ ...initialFormState });
  };
  console.log(contactData);
  return (
    <section
      className="contactForm"
      style={{ background: props.bgcForm, boxShadow: props.boxShadow }}
    >
      {formSubmited ? (
        <SendSuccess
          paragraphFirst={"Formularz wysłany"}
          paragraphSecond={"Oczekuj na kontakt z naszej strony"}
        />
      ) : null}
      <div className="contactForm__forms">
        <div className="contactForm__sign">
          <h3 style={{ color: props.fontColor }}>Formularz Kontaktowy</h3>
          <span style={{ color: props.fontColor }}>
            Uzupełnij wszystkie wymagane pola.
          </span>
          <form className="contactForm__form" onSubmit={handleSubmit}>
            <div className="contactForm__input">
              <input
                type="text"
                placeholder="Imię"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Nazwisko"
                name="lastName"
                value={contactData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={contactData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Telefon"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="guest"
                value={contactData.guest}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Wybierz
                </option>
                <option value="Klient Indywidualny">Klient Indywidualny</option>
                <option value=" Firma"> Firma</option>
              </select>
              <select
                name="category"
                value={contactData.category}
                onChange={handleChange}
                required
              >
                <option
                  value=""
                  selected={whichSelected !== "" ? true : false}
                  disabled
                  hidden
                >
                  Wybierz temat
                </option>
                <option
                  value="Klimatyzacja"
                  selected={whichSelected === "Klimatyzacja" ? true : false}
                >
                  Klimatyzacja
                </option>
                <option
                  value="Wentylacja"
                  selected={whichSelected === "Wentylacja" ? true : false}
                >
                  Wentylacja
                </option>
                <option
                  value="Pompy Ciepła"
                  selected={whichSelected === "Pompy Ciepła" ? true : false}
                >
                  Pompy Ciepła
                </option>
                <option
                  value="Rekuperacja"
                  selected={whichSelected === "Rekuperacja" ? true : false}
                >
                  Rekuperacja
                </option>
                <option
                  value="PPoż"
                  selected={whichSelected === "PPoż" ? true : false}
                >
                  PPoż
                </option>
              </select>
              <select
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Wybierz wątek
                </option>
                <option
                  value="wycena"
                  selected={pricingSelected === "Wycena" ? true : false}
                >
                  Wycena
                </option>
                <option value="montaż">Montaż</option>
                <option value="zakup">Zakup</option>
                <option value="serwis">Serwis</option>
                <option value="współpraca">Współpraca</option>
              </select>
              <textarea
                placeholder="Wpisz treść zapytania"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                required
              />
              {formSubmited ? (
                <div className="formSubmited">
                  <p>Wiadomość została wysłana.</p>
                </div>
              ) : null}
              {error == null ? null : (
                <div className="errorMessage">
                  <p>{error[0]}</p>
                </div>
              )}

              <input type="submit" style={{ color: props.fontColor }} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
