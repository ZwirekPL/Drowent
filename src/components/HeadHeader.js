import img1 from "../image/jpg/halasuf.jpg";

import "../style/sass/HeadHeader.sass";

const HeadHeader = () => {
    return (
      <div className="headheader">
        <picture>
            {/* <source srcset="img/awesomeWebPImage.webp" type="image/webp"> */}
            {/* <source srcset={img1} type="image/jpeg">  */}
            <img src={img1} alt="pictrue of hall with ventilation"></img>
        </picture>
      </div>
    );
  }
  
  export default HeadHeader;