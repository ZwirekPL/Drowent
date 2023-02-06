import "../assets/style/sass/ContactFooterSticky.sass";

import classNames from "classnames";
import useStickyBottom from "../hooks/useStickyBottom";

const ContactFooterSticky = () => {
  const { stickyBottom, stickyRefBottom } = useStickyBottom();

  return (
    <div
      ref={stickyRefBottom}
      className={classNames("contactSticky", { stickyBottom })}
    >
      <div className="contactSticky__mail">
        <a href="mailto: biuro@drowent.pl" itemprop="email">
          <i class="icon-mail-squared"></i>biuro@drowent.pl
        </a>
      </div>
      <div className="contactSticky__phone">
        <a href="tel:+48123456789" itemprop="telephone">
          <i class="icon-phone"></i>+48123456789
        </a>
      </div>
    </div>
  );
};

export default ContactFooterSticky;
