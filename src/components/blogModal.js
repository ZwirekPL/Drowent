// import React, { useEffect, useState } from "react";

import "../style/sass/blogModal.sass";

function BlogModal({ post: { title, description, imgUrl, date, tag }, index }) {
  //   const [show, setShow] = useState(true);
  //   const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     const cookieTimeout = setTimeout(() => {
  //       setOpen(true);
  //     }, 100);
  //     return () => {
  //       clearTimeout(cookieTimeout);
  //     };
  //   }, []);

  //   const handleClose = () => {
  //     setShow(!show);
  //   };

  return (
    <div className="cookie__modal">
      <div className="modal__text">
        <p>
          Nasza strona zbiera pilki cookie. Przechodząć dalej akceptujesz nasze
          warunki. Jeśli nie akceptujesz opuść stronę.
        </p>
      </div>
      <div className="modal__btn">Akceptuję</div>
    </div>
  );
}

export default BlogModal;
