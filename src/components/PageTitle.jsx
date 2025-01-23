import React from 'react';

const PageTitle = () => {
  return (
    <section id="heros" className="clearfix">
      <div className="container " data-aos="fade-left" data-aos-delay="100">
        <nav aria-label="breadcrumb">
          <h4 className="breadh4">ABOUT US</h4>
          <ol className="fables-breadcrumb breadcrumb px-0 py-3 " data-aos="fade-left" data-aos-delay="200">
            <li className="breadcrumb-item">
              <a href="index" className="fables-second-text-color">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: 'white' }}>
              About Us
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageTitle;
