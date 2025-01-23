import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./assets/css/main.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Contact from "./pages/contact";
import GetOurServices from "./pages/GetOurServices";
import Service from "./pages/Service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize PureCounter if it's available globally
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  useEffect(() => {
    // Adding this to make sure AOS reinitializes on location change
    const handleLocationChange = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    };
    handleLocationChange();
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/get-our-services" element={<GetOurServices />} />
          <Route path="/services" element={<Service />} />
          {/* Other routes */}
        </Routes>
      </main>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
