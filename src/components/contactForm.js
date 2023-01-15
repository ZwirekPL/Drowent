import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../style/sass/contactForm.sass";

const ContactForm = (props) => {
  const whichSelected = sessionStorage.getItem("drowentContactSelected");
  const pricingSelected = sessionStorage.getItem("drowentContactPricing");
  const initialFormState = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    guest: "",
    category: "",
    subject: "",
    message: "",
  };
  const [contactData, setContactData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

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

    //reset the form after submission
    setContactData({ ...initialFormState });
  };

  return (
    <div
      className="contactForm"
      style={{ background: props.bgcForm, boxShadow: props.boxShadow }}
    >
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
                <option value="" selected disabled hidden>
                  wybierz temat
                </option>
                <option
                  value="Klimatyzacja"
                  selected={whichSelected === "air" ? true : false}
                >
                  Klimatyzacja
                </option>
                <option
                  value="Wentylacja"
                  selected={whichSelected === "vent" ? true : false}
                >
                  Wentylacja
                </option>
                <option
                  value="Pompy Ciepła"
                  selected={whichSelected === "heat" ? true : false}
                >
                  Pompy Ciepła
                </option>
                <option
                  value="Rekuperacja"
                  selected={whichSelected === "recup" ? true : false}
                >
                  Rekuperacja
                </option>
                <option
                  value="ppoż"
                  selected={whichSelected === "fire" ? true : false}
                >
                  ppoż
                </option>
              </select>
              <select
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  wybierz wątek
                </option>
                <option
                  value="wycena"
                  selected={pricingSelected === "yes" ? true : false}
                >
                  wycena
                </option>
                <option value="montaż">montaż</option>
                <option value="zakup">zakup</option>
                <option value="serwis">serwis</option>
                <option value="współpraca">współpraca</option>
              </select>
              <textarea
                placeholder="Wpisz treść zapytania"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                required
              />
              <input type="submit" style={{ color: props.fontColor }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
