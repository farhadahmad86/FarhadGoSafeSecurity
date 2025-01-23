import React from "react";

import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
      <footer id="footer">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <h4>Contact Us</h4>
              <p>
                GoSafe Security Guard Agency specializes in providing a
                comprehensive range of services and back-office support, with a
                focus on effective leadership and expert management of
                industry-related operations.
              </p>
            </div>
            <div className="buttons">
              <Link className="btn" to="/get-our-services">
                Get Started
              </Link>
              <Link className="btn" to="/contact-us">
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <div className="logo" style={{ width: "80px" }}>
                  <Link to="/index">
                    <img
                      src="assets/img/favicon.png"
                      alt="GoSafe Logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <p className="mt-2">
                  Your trusted partner in comprehensive security solutions,
                  providing expert protection and peace of mind for homes and
                  businesses. Professional, reliable, and always vigilant.
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link className="nav-link scrollto active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/get-our-services">
                      Get Our Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <strong>Address:</strong> 2121 Chapel Street, Chapel Street
                  Student Halls, F12, Luton, England, LU12SE
                  <br />
                  <strong>Phone:</strong> +44 744 8966 550
                  <br />
                  <strong>Email:</strong> info@gosafesecurity.co.uk
                  <br />
                </p>
                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong>GoSafe Security</strong>. All Rights Reserved
            </div>
          </div>
        </div>
        <Link
          to="https://wa.me/+447448966550"
          id="chat-toggle"
          className="chat-toggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="bi bi-chat-dots"></i>
          </span>
        </Link>
        <Link
          to="tel:+447448966550"
          id="phone-icon"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-telephone-outbound"></i>
          <span className="tooltip">Call Now!</span>
        </Link>
      </footer>
  );
};

export default Footer;
