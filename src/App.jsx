import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ClientsPage from "./pages/ClientsPage";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increased from 800 to 1200 for a slower, premium feel
      easing: "ease-out-cubic", // Changed for a smoother slow-down effect at the end
      once: true,
      offset: 50, // Triggers slightly earlier
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
