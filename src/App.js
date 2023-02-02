import { Routes, Route } from "react-router-dom";

import Main from "./pages/home/Main";
import LoginSection from "./pages/login/LoginSection";
import AboutSection from "./pages/about/AboutSection";
import AirConditioning from "./pages/offer/AirConditioningSection.js";
import VentilationSection from "./pages/offer/VentilationSection.js";
import HeatPumpSection from "./pages/offer/HeatPumpSection.js";
import RecuperationSection from "./pages/offer/RecuperationSection.js";
import FireProtectionSection from "./pages/offer/FireProtectionSection.js";
import Shop from "./pages/shop/Shop.js";
import BlogSection from "./pages/blog/BlogSection";
import ContactSection from "./pages/contact/ContactSection";
import SignSection from "./pages/login/SignSection";
import PageNotFound from "./pages/404/PageNotFound.js";

import "./assets/fontello/css/fontello.css";

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
