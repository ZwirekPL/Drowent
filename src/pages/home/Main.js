import Header from "../../components/Header";
import MainSection from "./MainSection";
import Footer from "../../components/Footer";
import Cookie from "../../components/Cookie.js";

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
