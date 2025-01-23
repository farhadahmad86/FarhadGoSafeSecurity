import React, { useState,useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
const Navbar = () => {
  // State to handle navbar visibility on mobile
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  // Function to hide the navbar after clicking a link
  const closeNavbar = () => {
    setNavbarVisible(false);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <Link to="/" onClick={() => {
            handleNavigate("/");
          }}>
            <img
              src="assets/img/logo.png"
              alt="Logo"
              className="img-fluid"
            />
          </Link>
        </div>
        <nav id="navbar" className={`navbar ${isNavbarVisible ? "navbar-mobile" : ""}`}>
          <ul>
            <li onClick={() => {
            handleNavigate("/");
          }}>
              <Link className="nav-link scrollto active" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li onClick={() => {
            handleNavigate("/about-us");
          }}>
              <Link className="nav-link scrollto" to="/about-us" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li onClick={() => {
            handleNavigate("/services");
          }}>
              <Link className="nav-link scrollto" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
            <li onClick={() => {
            handleNavigate("/contact-us");
          }}>
              <Link className="nav-link scrollto" to="/contact-us" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
            <li onClick={() => {
            handleNavigate("/get-our-services");
          }}>
              <Link className="nav-link scrollto" to="/get-our-services" onClick={closeNavbar}>
                Get Our Services
              </Link>
            </li>
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={toggleNavbar}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
