

import "../style/sass/contactForm.sass";

const ContactForm = () => {
    return (
        <div className="contactForm">
            <div className="contactForm__forms">
                <div className="contactForm__sign">                    
                    <form action="#">
                        <h2>Formularz Kontaktowy</h2>
			            <span>Uzupełnij wszystkie wymagane pola.</span>
                        <div className="contactForm__input">
			                <input type="email" placeholder="Email" />
			                <input type="password" placeholder="Hasło" />
			                <input type="password" placeholder="Hasło" />
			                <input type="text" placeholder="Numer NIP" />
                        </div>
			            <button className="contactForm__signup"><p>Wyślij</p></button>
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default ContactForm;