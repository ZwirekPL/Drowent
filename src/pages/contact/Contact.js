import ContactForm from "./ContactForm";

import "../../assets/style/sass/Contact.sass";

const Contact = () => {
  return (
    <main className="contact">
      <article className="contact__left">
        <section className="contact__tel">
          <a href="tel:+48123456789" itemprop="telephone">
            <i class="icon-phone"></i>123456789
          </a>
        </section>
        <section className="contact__mail" itemprop="email">
          <a href="mailto: biuro@drowent.pl">
            <i class="icon-mail-squared"></i>biuro@drowent.pl
          </a>
        </section>
        <section
          className="contact__address"
          itemprop="address"
          itemscope
          itemtype="https://schema.org/PostalAddress"
        >
          <p itemprop="addressLocality">
            <i class="icon-home"></i>Mieczysława Pożaryskiego 19, 04-703
            Warszawa
          </p>
        </section>
        <span className="nip">nip</span>
        <span className="regon">regon</span>
        <span className="Krs">Krs</span>
      </article>
      <article className="contact__right">
        <ContactForm />
      </article>
    </main>
  );
};

export default Contact;
