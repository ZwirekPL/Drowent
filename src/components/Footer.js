

import "../style/sass/Footer.sass";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer__sm">
          <a href="https://pl-pl.facebook.com/" class="footer__icon">
            <i class="icon-facebook-squared"></i>
          </a>
          <a href="https://www.instagram.com/" class="footer__icon">
            <i class="icon-instagram"></i>
          </a>
          <a href="https://pl.linkedin.com/" class="footer__icon">
            <i class="icon-linkedin-squared"></i>
          </a>
        </div>
        <div className="footer__required">
          <a href="/privacy_policy" class="footer__pp">Polityka prywatności i plików cookies</a>
          <a href="/terms_of_use" class="footer__termsOfUse">Warunki korzystania</a>
          </div>
        <div className="footer__sitemap">mapa strony</div>
        <div className="footer__contact">          
            <span>dane kontaktowe:</span>
            <div className="footer__tel">
              <a href="tel:+48123456789">
              <i class="icon-phone"></i>123456789</a>
            </div>
            <div className="footer__mail">
                <a href="mailto: biuro@drowent.pl">
                <i class="icon-mail-squared"></i>biuro@drowent.pl</a>
            </div>
            <div className="footer__address">        
              <i class="icon-home"></i>
              <p>Mieczysława Pożaryskiego 19,</p><p> 04-703 Warszawa</p>
            </div>                
        </div>
        <div className="footer__copyright"><p>&#169; Wirgiliusz Ładziński 2022</p></div>
      </div>
    );
  }
  
  export default Footer;