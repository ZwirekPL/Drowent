
import "../style/sass/PhotoHeadSection.sass"


function PhotoHeadSection(props) {
return (
    <div className="photoHeadSection">
        <img src={props.src} alt={props.alt} />
    </div>
);
}

export default PhotoHeadSection;
