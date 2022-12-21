import { useForm } from "react-hook-form";

import "../style/sass/contactForm.sass";

const ContactForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
          <form className="contactForm__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contactForm__input">
              <input
                type="text"
                placeholder="Imię"
                {...register("name", {
                  required: true,
                  max: 15,
                  min: 3,
                  pattern: /"[a-zA-Z]"/i,
                })}
              />
              <input
                type="text"
                placeholder="Nazwisko"
                {...register("laName", {
                  required: true,
                  max: 20,
                  min: 1,
                  pattern: /"[a-zA-Z]"/i,
                })}
              />
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                  pattern: /"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/i,
                })}
              />
              <input
                type="tel"
                placeholder="Telefon"
                {...register("phone", {
                  required: true,
                  max: 9,
                  min: 9,
                  pattern: /"[0-9]{3}"/i,
                })}
              />
              <select {...register("guest", { required: true })}>
                <option value="" selected disabled hidden>
                  Wybierz
                </option>
                <option value="Klient Indywidualny">Klient Indywidualny</option>
                <option value=" Firma"> Firma</option>
              </select>
              <select {...register("line", { required: true })}>
                <option value="" selected disabled hidden>
                  wybierz temat
                </option>
                <option value="Klimatyzacja">Klimatyzacja</option>
                <option value="Wentylacja">Wentylacja</option>
                <option value="Pompy Ciepła">Pompy Ciepła</option>
                <option value="Rekuperacja">Rekuperacja</option>
                <option value="ppoż">ppoż</option>
              </select>
              <select {...register("subject", { required: true })}>
                <option value="" selected disabled hidden>
                  wybierz wątek
                </option>
                <option value="wycena">wycena</option>
                <option value="montaż">montaż</option>
                <option value="zakup">zakup</option>
                <option value="serwis">serwis</option>
                <option value="współpraca">współpraca</option>
              </select>
              <textarea
                placeholder="Wpisz treść zapytania"
                {...register("text", { required: true, min: 10 })}
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
