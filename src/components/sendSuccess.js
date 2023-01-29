import "../style/sass/sendSuccess.sass";

const SendSuccess = (props) => {
  return (
    <div className="sendSuccess_wrapper">
      <div className="sendSuccess_circle">
        <i class="icon-ok"></i>
      </div>
      <div className="sendSuccess_paragraph">
        <p>{props.paragraphFirst}</p>
        <p>{props.paragraphSecond}</p>
      </div>
    </div>
  );
};
export default SendSuccess;
