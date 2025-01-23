import React, { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    // Initialize counters when the component is mounted or revisited
    const counters = document.querySelectorAll('.purecounter');
    counters.forEach(counter => {
      // Reset counter to 0 initially
      counter.textContent = 0;

      // Get the data from the element attributes
      const end = parseInt(counter.getAttribute('data-purecounter-end'), 10);
      const duration = parseInt(counter.getAttribute('data-purecounter-duration'), 10);

      // Animate the counter (simple interval logic)
      let start = 0;
      const interval = setInterval(() => {
        if (start < end) {
          start++;
          counter.textContent = start;
        } else {
          clearInterval(interval);
        }
      }, duration * 10); // Adjust duration for the animation speed
    });
  }, []); // The empty dependency array ensures it runs only once, on mount

  return (
    <section id="why-us">
      <div className="container" data-aos="fade-up">
        <div className="row row-eq-height justify-content-end">
          <div className="col-lg-6 mb-6">
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-delay="100"
              style={{ textAlign: "left", padding: "10px" }}
            >
              <div className="card-body" style={{ padding: "32px" }}>
                <h2
                  className="card-title"
                  style={{
                    fontWeight: 900,
                    fontSize: "31px",
                    marginBottom: "15px",
                  }}
                >
                  WHAT MAKES US DIFFERENT
                </h2>
                <p className="card-text">
                  At GoSafe, our distinction lies in our commitment to
                  delivering comprehensive and client-centered security
                  solutions. We blend cutting-edge technology with a highly
                  trained team of professionals, including those certified
                  in fire safety and emergency response, to provide
                  unmatched protection. Our nationwide reach ensures local
                  expertise, while our dedication to continuous improvement
                  and client-focused service means we adapt and evolve to
                  meet your unique security needs. With GoSafe, you benefit
                  from a holistic approach that prioritizes your safety and
                  offers reliable, tailored solutions for every security
                  challenge.
                </p>
                <div
                  className="row counters"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="col-lg-3 col-6 d-flex justify-content-between align-items-center cout">
                    <div className="counter-container">
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="100"
                        data-purecounter-duration="1"
                        className="purecounter"
                        style={{ fontSize: "20px" }}
                      >
                        0
                      </span>
                      <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                        %
                      </span>
                    </div>
                    <p
                      className="ml-auto"
                      style={{
                        margin: "0px 0px 0px 12px",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      Employee Satisfaction
                    </p>
                  </div>
                  <div className="col-lg-3 col-6 d-flex justify-content-between align-items-center coutone">
                    <div className="counter-container">
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="100"
                        data-purecounter-duration="1"
                        className="purecounter"
                        style={{ fontSize: "20px" }}
                      >
                        0
                      </span>
                      <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                        %
                      </span>
                    </div>
                    <p
                      className="ml-auto"
                      style={{
                        margin: "0px 0px 0px 12px",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      Client Feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
