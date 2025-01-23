import React from "react";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <>
       <section id="about">
          <div className="container" data-aos="fade-up">
            <div
              className="row about-extra"
              style={{ marginTop: "110px", position: "relative" }}
            >
              {/* Image and Cards */}
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                style={{ position: "relative" }}
              >
                <div
                  className="cards top-left-card"
                  data-aos="fade-right"
                ></div>
                <img
                  src="assets/img/about-extra-2.jpg"
                  className="img-fluid"
                  alt="About Us"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="cards bottom-right-card" data-aos="fade-left">
                  <i
                    className="bi bi-stars"
                    style={{ marginBottom: "10px", fontSize: "30px" }}
                  ></i>
                  <p style={{ margin: "0px", fontWeight: "500" }}>
                    Currently, our security guard agency manages over 850
                    positions across various locations, handling more than
                    40,000 shifts each month.
                  </p>
                </div>
              </div>

              {/* Text and Services */}
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 mt-5"
                data-aos="fade-right"
              >
                <h4>Premier Security Solutions for Every Need</h4>
                <p>
                  At GoSafe Security Guard Agency, we are dedicated to providing
                  top-tier security solutions tailored to the unique needs of
                  every client. With a leadership team that combines over 120
                  years of experience in the security industry, we excel in
                  safeguarding properties, assets, and people with unmatched
                  expertise.
                </p>
                <div className="service-list">
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Mobile Patrols</span>
                    <i className="bi bi-check-circle"></i>
                    <span>Uniformed Security Guards</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Event Security</span>
                    <i className="bi bi-check-circle"></i>
                    <span>School and Campus Security</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Office Security</span>
                    <i className="bi bi-check-circle"></i>
                    <span>Security Services Nationwide</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Retail Security</span>
                    <i className="bi bi-check-circle"></i>
                    <span>Fire and Security Systems</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Corporate Security</span>
                    <i className="bi bi-check-circle"></i>
                    <span>Emergency and Temporary Security</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Residential Security</span>
                    <i className="bi bi-check-circle"></i>
                    <span>Fire Marshal Trained Guards</span>
                  </div>
                </div>
                <div className="text-left">
                  <button type="submit" title="Send Message">
                    <a href="contact-us">Get Free Consultation</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
