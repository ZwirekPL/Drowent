import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import LoginSection from "./LoginSection";
import AboutSection from "./AboutSection";
import AirConditioning from "./airConditioningSection.js";
import VentilationSection from "./ventilationSection.js";
import HeatPumpSection from "./heatPumpSection.js";
import RecuperationSection from "./recuperationSection.js";
import FireProtectionSection from "./fireProtectionSection.js";
import Shop from "./shop.js";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import SignSection from "./SignSection";
import PageNotFound from "./pageNotFound.js";

import "../style/css/App.css";
import "../utils/fontello/css/fontello.css";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/login" element={<LoginSection />} />
      <Route path="/signup" element={<SignSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/air-conditioning" element={<AirConditioning />} />
      <Route path="/ventilation" element={<VentilationSection />} />
      <Route path="/heat-pump" element={<HeatPumpSection />} />
      <Route path="/recuperation" element={<RecuperationSection />} />
      <Route path="/fire-protection" element={<FireProtectionSection />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<BlogSection />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
