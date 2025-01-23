import React, { useState, useEffect } from "react";

const ApplyNow = () => {
  return (
    <section id="hero" className="clearfix back-img">
          <div className="container" data-aos="fade-up">
            <div className="hero-infos" data-aos="zoom-in" data-aos-delay="100">
              <h2>Ready to get help? Let's do this</h2>
              <div className="brt">
                <a href="get-our-services" className="btn-get-started scrollto">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>
  );
};

export default ApplyNow;
