import React, { useEffect, useState } from "react";

import "../style/sass/Cookie.sass";

function Cookie() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cookieTimeout = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => {
      clearTimeout(cookieTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <div
      className="cookie"
      style={{
        display: show ? "flex" : "none",
        opacity: open ? "1" : "0",
      }}
    >
      <div className="cookie__modal">
        <div className="modal__text">
          <p>
            Nasza strona zbiera pilki cookie. Przechodząć dalej akceptujesz
            nasze warunki. Jeśli nie akceptujesz opuść stronę.
          </p>
        </div>
        <div onClick={handleClose} className="modal__btn">
          Akceptuję
        </div>
      </div>
    </div>
  );
}

export default Cookie;
