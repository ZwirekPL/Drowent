// import React, { useEffect, useState } from "react";

import "../style/sass/blogModal.sass";

function BlogModal({ body, date, imgUrl, tag, title }) {
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
      <div className="modal__main">
        <div className="main__closeBtn"></div>
        <div
          className="main__img"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
        <div className="main__assets">
          <div className="assets__title">{title}</div>
          <div className="assets__date">{date}</div>
        </div>
        <div className="main__text">
          <p>{body}</p>
        </div>
        <div className="main__tag">{tag}</div>
      </div>
    </div>
  );
}

export default BlogModal;
