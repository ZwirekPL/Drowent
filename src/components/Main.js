import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Cookie from "./Cookie.js";

import "../style/css/Main.css";

function Main() {
  return (
    <div className="Main">
      <Cookie />
      <header>
        <Header />
      </header>
      <main>
        <MainSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
