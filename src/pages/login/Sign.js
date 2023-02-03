import "../../assets/style/sass/Sign.sass";

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign__forms">
        <div className="sign__sign">
          <form action="#">
            <h1>Zarejestruj</h1>
            <span>uzupełnij wszystkie potrzebne dane</span>
            <div className="sign__input">
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email" />
              <label htmlFor="password">Hasło</label>
              <input type="password" placeholder="Hasło" />
              <label htmlFor="address">adres</label>
              <input type="address" placeholder="adres" />

              <label htmlFor="password">Hasło</label>
              <input type="password" placeholder="Hasło" />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email" />
              <label htmlFor="password">Hasło</label>
              <input type="password" placeholder="Hasło" />
            </div>
            <button className="sign__signup">
              <p>Zaloguj</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
