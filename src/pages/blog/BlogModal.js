// import React, { useState } from "react";

import "../../assets/style/sass/BlogModal.sass";

function BlogModal({ body, date, imgUrl, tag, title }) {
  return (
    <article className="wrapper__modal">
      <div className="modal__main">
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
    </article>
  );
}

export default BlogModal;
