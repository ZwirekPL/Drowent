import { useState } from "react";

import "../style/sass/RegistrationCompany.sass";

const validate = (loginData) => {
  const errorsArray = [];
  // console.log(loginData.email);
  // console.log(loginData.password);
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email)) {
    errorsArray.push("E-mail jest niepoprawny");
  }
  if (loginData.password.length < 8) {
    errorsArray.push("Hasło musi posiadać min. 8 znaków.");
  }
  if (!/[a-zA-Z]+/i.test(loginData.password)) {
    errorsArray.push(
      "Hasło musi posiadać min. 1 wielką literę oraz 1 małą literę."
    );
  }
  if (!/\d/i.test(loginData.password)) {
    errorsArray.push("Hasło musi posiadać min. 1 liczbę.");
  }
  if (loginData.password !== loginData.secondPassword) {
    errorsArray.push("Hasła nie są takie same.");
  }
  //   walidacja nip
  if (loginData.password !== loginData.secondPassword) {
    errorsArray.push("Hasła nie są takie same.");
  }
  //   end
  if (errorsArray.length !== 0) {
    console.log(errorsArray);
    return errorsArray;
  } else {
    return false;
  }
};

const RegistrationCompany = () => {
  const registerCompanyInit = {
    email: "",
    password: "",
    secondPassword: "",
    nip: "",
  };
  const [passFirstIsVisible, setFirstPassVisible] = useState(false);
  const [passSecondIsVisible, setSecondPassVisible] = useState(false);
  const [loginData, setloginData] = useState({ ...registerCompanyInit });
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setloginData({
      ...loginData,
      [target.name]: target.value,
    });
  };

  const togglePasswordFirst = () => {
    setFirstPassVisible(!passFirstIsVisible);
  };
  const togglePasswordSecond = () => {
    setSecondPassVisible(!passSecondIsVisible);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const errorMessage = validate(loginData);
    if (errorMessage) {
      setError(errorMessage);
      return console.log("error", errorMessage);
    } else {
      console.log("isLogged", loginData);
      // console.log("error", error[0], error);
      setIsLogged(true);
      setError(null);
      setTimeout(function () {
        setIsLogged(false);
      }, 3500);
      setloginData({ ...registerCompanyInit });
    }
  };

  return (
    <div className="registrationcompany">
      <div className="registrationcompany__forms">
        <div className="registrationcompany__sign">
          <form action="#">
            <h2>Zarejestruj</h2>
            <span>Konto Firmowe</span>
            <div className="registrationcompany__input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={loginData.email}
                autocomplete="email"
                required
              />
              <input
                type={!passFirstIsVisible ? "password" : "text"}
                name="password"
                placeholder={"Hasło"}
                onChange={handleChange}
                value={loginData.password}
                autocomplete="current-password"
                id="current-password"
                required
              />
              <span className="icon" onClick={togglePasswordFirst}>
                {passFirstIsVisible ? (
                  <i className="icon-eye"></i>
                ) : (
                  <i className="icon-eye-off"></i>
                )}
              </span>
              <input
                type={!passSecondIsVisible ? "password" : "text"}
                name="secondPassword"
                placeholder={"Powtórz Hasło"}
                onChange={handleChange}
                value={loginData.secondPassword}
                autocomplete="current-password"
                id="second-current-password"
                required
                style={{ marginTop: "-0.5rem" }}
              />
              {error == null ? null : <p>{error[0]}</p>}
              <span className="icon" onClick={togglePasswordSecond}>
                {passSecondIsVisible ? (
                  <i className="icon-eye"></i>
                ) : (
                  <i className="icon-eye-off"></i>
                )}
              </span>
              <input
                type="text"
                name="nip"
                placeholder="Numer NIP "
                value={loginData.nip}
                required
                style={{ marginTop: "-0.5rem" }}
              />
            </div>
            <input type="submit" value="zarejestruj" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCompany;
