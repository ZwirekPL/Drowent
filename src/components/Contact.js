import ContactForm from "./contactForm";

import "../style/sass/Contact.sass";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__left">
        <div className="contact__tel">
          <a href="tel:+48123456789">
            <i class="icon-phone"></i>123456789
          </a>
        </div>
        <div className="contact__mail">
          <a href="mailto: biuro@drowent.pl">
            <i class="icon-mail-squared"></i>biuro@drowent.pl
          </a>
        </div>
        <div className="contact__address">
          <p>
            <i class="icon-home"></i>Mieczysława Pożaryskiego 19, 04-703
            Warszawa
          </p>
        </div>
        <span className="nip">nip</span>
        <span className="regon">regon</span>
        <span className="Krs">Krs</span>
      </div>
      <div className="contact__right">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
