import "../assets/style/sass/Opinion.sass";

function Review() {
  return (
    <div className="feedback">
      <div className="feedback__emoji">
        <i class="icon-emo-happy"></i>
      </div>
      <div className="feedback__quote">"</div>
      <div className="feedback__content">
        <p>
          Bardzo dobra robota. Nikt jak Pan Tomasz nie wyczyści rury ...
          wentylacyjnej
        </p>
      </div>
      <div className="feedback__signature">
        <p>Barbara z Przemyśla</p>
      </div>
    </div>
  );
}

export default Review;
