import { useForm } from 'react-hook-form';

import "../style/sass/RegistrationCustomer.sass";

const RegistrationCustomer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
    return (
        <div className="registrationCustomer">
            <div className="registrationCustomer__forms">
                <div className="registrationCustomer__sign">                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Zarejestruj</h2>
			            <span>Konto Prywatne</span>
                        <div className="registrationCustomer__input">
                            <input type="email" placeholder="E-mail" {...register("email", {required: true, pattern: /"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/i})} />
                            <input type="password" placeholder="Hasło" {...register("Password", {required: true})} />
			                <input type="password" placeholder="Powtórz Hasło" {...register("Password", {required: true})} />
                        </div>
                        <input type="submit" />
		            </form>                    
                </div>                    
            </div>
        </div>
    );
}
  
  export default RegistrationCustomer;


