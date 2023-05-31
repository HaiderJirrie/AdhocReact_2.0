import Home from "./Pages/Home";
import Services from "./Pages/Services";
import InfoSoftwareDevelopment from "./components/InfoSoftwareDevelopment";
import InfoServicedesk from "./components/infoServicedesk";
import InfoAdvice from "./components/InfoAdvice";
import OverOns from "./Pages/OverOns";
import ContactPage from "./Pages/ContactPage";
import Offerte from "./Pages/Offerte";
import Privacy from "./Pages/Privacy";
import NotFound from "./Pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  window.onunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <div className="flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/software-ontwikkelen" element={<InfoSoftwareDevelopment />} />
          <Route path="/services/ict-servicedesk" element={<InfoServicedesk/>} />
          <Route path="/services/professioneel-advies" element={<InfoAdvice />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/over" element={<OverOns />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
