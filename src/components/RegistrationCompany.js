import { useForm } from 'react-hook-form';

import "../style/sass/RegistrationCompany.sass";

const RegistrationCompany = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
    return (
        <div className="registrationcompany">
            <div className="registrationcompany__forms">
                <div className="registrationcompany__sign">                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Zarejestruj</h2>
			            <span>Konto Firmowe</span>
                        <div className="registrationcompany__input">
                            <input type="email" placeholder="E-mail" {...register("email", {required: true, pattern: /"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/i})} />
                            <input type="password" placeholder="Hasło" {...register("Password", {required: true})} />
			                <input type="password" placeholder="Powtórz Hasło" {...register("Password", {required: true})} />
			                <input type="text" placeholder="Numer NIP " {...register("Numer NIP ", {required: true, pattern: /^((\d{3}[- ]\d{3}[- ]\d{2}[- ]\d{2})|(\d{3}[- ]\d{2}[- ]\d{2}[- ]\d{3}))$/i})} />
                        </div>
			            <input type="submit" />
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default RegistrationCompany;