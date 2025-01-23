import React, { useEffect, useRef, useState } from "react";
import Counter from "../components/Counter";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import Service from "../components/Service";
import { Link } from "react-router-dom";
import WhyUs from "../components/WhyUs";
import ApplyNow from "../components/ApplyNow";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="clearfix">
        <video
          src="assets/img/40X.mp4"
          autoPlay
          loop
          playsInline
          preload="auto"
          className="loaded"
        >
          <source src="assets/img/40X.mp4" type="video/mp4" />
        </video>
        <div className="container" data-aos="fade-up">
          <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <p>GOSAFE Security Agency</p>
            <h2>Protecting You with Excellence</h2>
            <p>
              We offer reliable security solutions that keep you safe and
              secure.
            </p>
            <div className="brt">
              <Link className="btn-get-started scrollto" to="/get-our-services">
                Get Started
              </Link>
              <Link className="btn-services scrollto" to="/services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div id="main">
        {/* About Section */}
        <About />
        {/* Services */}
        <Service />
        {/*Why Us */}
        <WhyUs />
        {/* Counter Se */}
        <Counter />
        {/* Apply Now */}
        <ApplyNow />
      </div>
      <Footer />
    </>
  );
};

export default Home;
