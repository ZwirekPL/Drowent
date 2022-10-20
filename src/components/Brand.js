
import "../style/sass/Brand.sass"


function Brand(props) {
return (
    <div className="brand">        
        <div className="color">
            <img src={props.src} alt={props.alt} height={`${props.height} vh`} />
        </div>
    </div>
);
}

export default Brand;
