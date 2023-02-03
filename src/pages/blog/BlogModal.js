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
          <h1 className="assets__title">{title}</h1>
          <h4 className="assets__date">{date}</h4>
        </div>
        <h2 className="main__text">
          <p>{body}</p>
        </h2>
        <div className="main__tag">{tag}</div>
      </div>
    </article>
  );
}

export default BlogModal;
