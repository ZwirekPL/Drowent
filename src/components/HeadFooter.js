import "../style/sass/HeadFooter.sass";

const HeadFooter = () => {
  return (
    <div className="head__footer">
      <div className="hfooter__left">
        <div className="hfooter__tel">
          <a href="tel:+48123456789">
            <i class="icon-phone"></i>+48123456789
          </a>
        </div>
        <div className="hfooter__mail">
          <a href="mailto: biuro@drowent.pl">
            <i class="icon-mail-squared"></i>biuro@drowent.pl
          </a>
        </div>
      </div>
      <div className="hfooter__right">
        <i class="icon-home"></i>
        <p>Mieczysława Pożaryskiego 19, 04-703 Warszawa</p>
      </div>
    </div>
  );
};

export default HeadFooter;
