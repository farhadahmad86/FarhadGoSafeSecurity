import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageTitle = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="heros" className="clearfix">
      <div className="container" data-aos="fade-left" data-aos-delay="100">
        <nav aria-label="breadcrumb">
          <h4 className="breadh4">{title}</h4>
          <ol className="breadcrumb px-0 py-3" data-aos="fade-left" data-aos-delay="200">
            <li className="breadcrumb-item">
              <a href="index" className="text-color">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: 'white' }}>
              {subtitle}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageTitle;
