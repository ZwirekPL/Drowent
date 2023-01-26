import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Cookie from "./Cookie.js";

import "../style/css/Main.css";

function Main() {
  return (
    <div className="Main">
      <Cookie />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default Main;
