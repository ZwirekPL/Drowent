import React, { useEffect, useState } from "react";

import "../style/sass/Cookie.sass";

function Cookie() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const checkCookie = sessionStorage.getItem("drowentCookieAccept") || null;

  useEffect(() => {
    const cookieTimeout = setTimeout(() => {
      if (checkCookie === "true") {
        setOpen(false);
        setVisible(false);
      } else {
        const visibleTimer = setTimeout(() => {
          setOpen(true);
        }, 500);
        setVisible(true);
        return () => {
          clearTimeout(visibleTimer);
        };
      }
    }, 1000);
    return () => {
      clearTimeout(cookieTimeout);
    };
  }, []);
  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("drowentCookieAccept", "true");
  };

  return (
    <div
      className="cookie"
      style={{
        display: visible ? "flex" : "none",
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
