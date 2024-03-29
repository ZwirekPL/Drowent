import { NavLink } from "react-router-dom";
import ContactForm from "../contact/ContactForm";
import Cookie from "../../components/Cookie";

import "../../assets/style/sass/PageNotFound.sass";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <Cookie />
      <main>
        <div className="notFound">
          <div className="notFound__left">
            <div className="text">
              <h1>Ta droga prowadzi do nikąd ...</h1>
              <h2>Error 404 Page Not Found</h2>
            </div>
            <NavLink to="/">
              <div className="btnBack">
                <p>Powrót do strony głównej</p>
              </div>
            </NavLink>
            <div className="notFound__tel">
              <a href="tel:+48123456789">
                <i class="icon-phone"></i>123456789
              </a>
            </div>
            <div className="notFound__mail">
              <a href="mailto: biuro@drowent.pl">
                <i class="icon-mail-squared"></i>biuro@drowent.pl
              </a>
            </div>
            <div className="notFound__address">
              <p>
                <i class="icon-home"></i>Mieczysława Pożaryskiego 19, 04-703
                Warszawa
              </p>
            </div>
          </div>
          <div className="notFound__right">
            <ContactForm
              bgcForm={"rgba(0, 0, 0, 0.5)"}
              fontColor={"#D0BED4"}
              boxShadow={"3px 10px 40px 3px #333"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;
