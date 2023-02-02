import "../assets/style/sass/HeadFooter.sass";

const HeadFooter = () => {
  return (
    <article className="head__footer">
      <section className="hfooter__left">
        <div className="hfooter__tel">
          <a href="tel:+48123456789" itemprop="telephone">
            <i class="icon-phone"></i>+48123456789
          </a>
        </div>
        <div className="hfooter__mail">
          <a href="mailto: biuro@drowent.pl" itemprop="email">
            <i class="icon-mail-squared"></i>biuro@drowent.pl
          </a>
        </div>
      </section>
      <section
        className="hfooter__right"
        itemprop="address"
        itemscope
        itemtype="https://schema.org/PostalAddress"
      >
        <i class="icon-home"></i>
        <p itemprop="addressLocality">
          Mieczysława Pożaryskiego 19, 04-703 Warszawa
        </p>
      </section>
    </article>
  );
};

export default HeadFooter;
