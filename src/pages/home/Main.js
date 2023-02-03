import Header from "../../layouts/Header";
import MainSection from "./MainSection";
import Footer from "../../layouts/Footer";
import Cookie from "../../components/Cookie.js";

import "../../assets/style/css/Main.css";

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
