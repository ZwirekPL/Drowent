


import "../style/sass/HeadFooter.sass";

const HeadFooter = () => {
    return (
      <div className="head__footer">
        <div className="hfooter__left">
            <div className="hfooter__tel"><i class="icon-phone"></i><a href="tel:                 +48123456789">123456789</a></div>
            <div className="hfooter__mail"><i class="icon-mail-squared"></i><a href="mailto: biuro@drowent.pl">biuro@drowent.pl</a>
            </div>
        </div>
        <div className="hfooter__right"><i class="icon-home"></i><p>Mieczysława Pożaryskiego 19, 04-703 Warszawa</p></div>
      </div>
    );
  }
  
  export default HeadFooter;