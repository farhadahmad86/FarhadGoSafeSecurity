import React, { useEffect } from "react";

const ApplyNow = () => {
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
    <section id="portfolio" className="clearfix">
      <div className="container" data-aos="fade-up">
        <div
          className="row counters"
          style={{
            border: '6px solid',
            borderRadius: '52px',
            padding: '35px',
          }}
        >
          {/* <div
            className="col-lg-6 col-6 text-center d-flex flex-column align-items-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="counter-containeres">
              <span
                data-purecounter-start="0"
                data-purecounter-end="10"
                data-purecounter-duration="1"
                className="purecounter"
                style={{ fontSize: '54px', fontWeight: 700 }}
              >
                0
              </span>
              <span className="plus-sign">+</span>
            </div>
            <p style={{ fontSize: '12px', fontWeight: 500 }}>
              Years of Experience
            </p>
          </div> */}
          <div
            className="col-lg-12 col-12 text-center d-flex flex-column align-items-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="counter-containeres">
              <span
                data-purecounter-start="0"
                data-purecounter-end="35"
                data-purecounter-duration="1"
                className="purecounter"
                style={{ fontSize: '54px', fontWeight: 700 }}
              >
                0
              </span>
              <span className="plus-sign">+</span>
            </div>
            <p style={{ fontSize: '12px', fontWeight: 500 }}>
              Security Guards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
