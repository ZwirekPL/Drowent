import { useState } from "react";
import SendSuccess from "./sendSuccess";

import "../style/sass/Login.sass";

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
  if (errorsArray.length !== 0) {
    console.log(errorsArray);
    return errorsArray;
  } else {
    return false;
  }
};

const Login = () => {
  const loginInit = {
    email: "",
    password: "",
  };
  const [passIsVisible, setPassVisible] = useState(false);
  const [loginData, setloginData] = useState({ ...loginInit });
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setloginData({
      ...loginData,
      [target.name]: target.value,
    });
  };

  const togglePassword = () => {
    setPassVisible(!passIsVisible);
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
      setloginData({ ...loginInit });
    }
  };
  return (
    <section className="login">
      <div className="login__forms">
        <div className="login__login">
          {isLogged ? (
            <SendSuccess
              paragraphFirst={"Zostałeś"}
              paragraphSecond={"Poprawnie zalogowany"}
            />
          ) : null}
          <form action="#">
            <h2>Zaloguj</h2>
            <nav className="login__social">
              <a href="https://pl-pl.facebook.com/" className="login__icon">
                <i className="icon-facebook-squared"></i>
              </a>
              <a href="https://www.instagram.com/" className="login__icon">
                <i className="icon-instagram"></i>
              </a>
              <a href="https://pl.linkedin.com/" className="login__icon">
                <i className="icon-linkedin-squared"></i>
              </a>
            </nav>
            <span>albo użyj email do zalogowania</span>
            <div className="login__input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={loginData.email}
                autocomplete="email"
                required
              />
              <div className="formHide">
                <input
                  type={!passIsVisible ? "password" : "text"}
                  name="password"
                  placeholder={"Hasło"}
                  onChange={handleChange}
                  value={loginData.password}
                  autocomplete="current-password"
                  id="current-password"
                  required
                />
                {error == null ? null : <p>{error[0]}</p>}
                <span className="icon" onClick={togglePassword}>
                  {passIsVisible ? (
                    <i className="icon-eye"></i>
                  ) : (
                    <i className="icon-eye-off"></i>
                  )}
                </span>
              </div>
            </div>
            <button className="login__forgot">
              <p>zapomniałeś hasła ?</p>
            </button>
            {isLogged ? (
              <button
                className="login__signup"
                onClick={handleClick}
                style={{ backgroundColor: "green", right: "3.5rem" }}
              >
                <p>Zostałeś zalogowany</p>
              </button>
            ) : (
              <button className="login__signup" onClick={handleClick}>
                <p>Zaloguj</p>
              </button>
            )}
            {/* {error == null ? null : (
              <div className="errorMessage">
                <p>{error[0]}</p>
              </div>
            )} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
