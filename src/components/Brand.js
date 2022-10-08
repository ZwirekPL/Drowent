
import "../style/sass/Brand.sass"


function Brand(props) {
return (
    <div className="brand">        
        <div className="color">
            <img src={props.src} alt={props.alt} />
        </div>
        <div className="bw">
            <img src={props.srcbw} alt={props.alt} />    
        </div>
    </div>
);
}

export default Brand;
