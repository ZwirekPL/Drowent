import "../../assets/style/sass/Brand.sass";

function Brand(props) {
  return (
    <div className="brand">
      <div className="color">
        <img src={props.src} alt={props.alt} itemprop="image" />
      </div>
    </div>
  );
}

export default Brand;
