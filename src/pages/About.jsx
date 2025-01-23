import React, { useEffect } from "react";
import PageTitle from "./PageTitle";
import Counter from "../components/Counter";
import Footer from "./Footer";
import WhyUs from "../components/WhyUs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <PageTitle title="ABOUT US" subtitle="About Us" key="page-title" />
      <section id="about">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <header className="section-header">
            <h3>About Us</h3>
            <h5 style={{ textAlign: "center", fontWeight: 600 }}>
              Welcome to GoSafe Security
            </h5>
            <p style={{ color: "black" }}>
              We offer top-tier security solutions across the UK, committed to
              excellence and customer satisfaction. Our reputation for
              professionalism and integrity makes us a leading provider in
              comprehensive security services.
            </p>
          </header>

          <div className="row about-container car">
            <div className="col-lg-6 content order-lg-1 order-2">
              <h3
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Objectives
              </h3>

              <div
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon" style={{ padding: "18px" }}>
                  <i className="bi bi-shield-shaded"></i>
                </div>
                <div className="text-content" style={{ marginLeft: "-55px" }}>
                  <h4 className="title">
                    <a href="#">Deliver Exceptional Security Solutions</a>
                  </h4>
                  <p className="description">
                    To offer a wide range of security services that cater to the
                    diverse needs of our clients, ensuring comprehensive
                    protection and peace of mind.
                  </p>
                </div>
              </div>

              <div
                className="icon-box mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon" style={{ padding: "18px" }}>
                  <i className="bi bi-search"></i>
                </div>
                <div className="text-content" style={{ marginLeft: "-55px" }}>
                  <h4 className="title">
                    <a href="#">Enhance Safety and Security</a>
                  </h4>
                  <p className="description">
                    To continuously improve our security measures and practices,
                    leveraging the latest technology and industry best practices
                    to enhance the safety of our clients.
                  </p>
                </div>
              </div>

              <div
                className="icon-box mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon" style={{ padding: "18px" }}>
                  <i className="bi bi-person-check"></i>
                </div>
                <div className="text-content" style={{ marginLeft: "-55px" }}>
                  <h4 className="title">
                    <a href="#">Foster Professionalism and Integrity</a>
                  </h4>
                  <p className="description">
                    To uphold the highest standards of professionalism and
                    integrity in all our interactions, building trust and
                    long-term relationships with our clients.
                  </p>
                </div>
              </div>

              <div
                className="icon-box mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon" style={{ padding: "18px" }}>
                  <i className="bi bi-bullseye"></i>
                </div>
                <div className="text-content" style={{ marginLeft: "-55px" }}>
                  <h4 className="title">
                    <a href="#">Commit to Customer Satisfaction</a>
                  </h4>
                  <p className="description">
                    To prioritize the needs and concerns of our clients,
                    providing personalized services that exceed expectations and
                    deliver exceptional value.
                  </p>
                </div>
              </div>

              <div
                className="icon-box mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon" style={{ padding: "18px" }}>
                  <i className="bi bi-arrow-clockwise"></i>
                </div>
                <div className="text-content" style={{ marginLeft: "-55px" }}>
                  <h4 className="title">
                    <a href="#">Promote Continuous Improvement</a>
                  </h4>
                  <p className="description">
                    To invest in ongoing training and development for our staff,
                    ensuring they remain at the forefront of the security
                    industry and can effectively address emerging threats.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 pt-5 pt-lg- mt-5"
              data-aos="fade-left"
            >
              <h4 style={{ fontSize: "40px", fontWeight: "700" }}>
                Our Vision
              </h4>
              <p>
                Our vision is to set the standard for security services across
                the UK by integrating innovative technology, skilled personnel,
                and exceptional customer service. We aim to create safer
                environments for our clients, ensuring peace of mind and a sense
                of security in every setting.
              </p>

              <h4 style={{ fontSize: "40px", fontWeight: "700" }}>
                Our Mission
              </h4>
              <p>
                Our mission is to provide the highest quality security services
                tailored to the unique needs of our clients. We achieve this by
                employing highly trained professionals, utilizing advanced
                security solutions, and maintaining a relentless commitment to
                excellence. Our goal is to exceed client expectations through
                reliability, efficiency, and a proactive approach to security.
              </p>

              <h4 style={{ fontSize: "40px", fontWeight: "700" }}>Our Goal</h4>
              <p>
                Our goal is to ensure the highest level of client safety and
                satisfaction through comprehensive training and the latest
                technology. We aim to improve response times, maintain
                regulatory compliance, and create a positive work environment
                for our staff. By expanding our service offerings and fostering
                strong community relations, we seek to drive sustainable growth
                and enhance our reputation as a trusted security provider.
              </p>
            </div>
          </div>

          <div className="row about-container mt-3">
            <div className="col-lg-12 content order-lg-1 order-2 mt-5">
              <div
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ marginBottom: "30px" }}
              >
                <div className="icon">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h4 className="title">
                  <a href="">Accountability and Integrity</a>
                </h4>
                <ul className="description mt-3">
                  <li>
                    <strong>Transparent Operations:</strong> We operate with
                    full transparency, providing clear communication and
                    detailed reports on our services and performance. Our
                    clients are always informed and involved in the security
                    management process.
                  </li>
                  <li>
                    <strong>Ethical Practices:</strong> Our commitment to
                    ethical practices ensures that we conduct our business with
                    honesty and integrity. We adhere to all industry regulations
                    and standards, maintaining the trust and confidence of our
                    clients.
                  </li>
                  <li>
                    <strong>Responsiveness and Responsibility:</strong> We take
                    full responsibility for our actions and performance. Any
                    issues or concerns are addressed promptly and effectively,
                    demonstrating our commitment to delivering on our promises
                    and maintaining client satisfaction.
                  </li>
                </ul>
              </div>

              <div
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ marginBottom: "30px" }}
              >
                <div className="icon">
                  <i className="bi bi-star-half"></i>
                </div>
                <h4 className="title">
                  <a href="">Commitment to Quality</a>
                </h4>
                <ul className="description mt-3">
                  <li>
                    <strong>Top-Notch Equipment and Technology:</strong> We use
                    the latest security technology and equipment to provide
                    effective and reliable protection. Our investment in
                    advanced systems ensures that we deliver superior security
                    solutions tailored to our clients’ needs.
                  </li>
                  <li>
                    <strong>Detailed Service Delivery:</strong> We meticulously
                    plan and execute our security services, ensuring that every
                    aspect of our operations is handled with precision and care.
                    Our attention to detail guarantees that our clients receive
                    the highest quality of service.
                  </li>
                  <li>
                    <strong>Client-Centric Approach:</strong> Our focus is
                    always on our clients’ needs and expectations. We work
                    closely with each client to understand their specific
                    requirements and tailor our services accordingly. This
                    personalized approach ensures that we deliver solutions that
                    truly meet their security needs.
                  </li>
                </ul>
              </div>

              <div
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ marginBottom: "30px" }}
              >
                <div className="icon">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h4 className="title">
                  <a href="">Unmatched Training and Expertise</a>
                </h4>
                <ul className="description mt-3">
                  <li>
                    <strong>Comprehensive Security Training:</strong> Our guards
                    receive extensive training in various security techniques,
                    emergency response, and customer service. This ensures they
                    are well-prepared to handle any situation with
                    professionalism and efficiency.
                  </li>
                  <li>
                    <strong>Fire Marshal Certification:</strong> We go beyond
                    basic security training by equipping our guards with fire
                    marshal certification. This specialized training covers fire
                    prevention, emergency evacuation procedures, and effective
                    use of fire safety equipment, enhancing their ability to
                    manage fire-related emergencies effectively.
                  </li>
                  <li>
                    <strong>Continuous Development:</strong> We invest in
                    ongoing training and development to keep our staff
                    up-to-date with the latest security trends and practices.
                    This commitment to continuous improvement ensures that our
                    guards are always prepared to deliver the highest level of
                    service.
                  </li>
                </ul>
              </div>

              <div
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ marginBottom: "30px" }}
              >
                <div className="icon">
                  <i className="bi bi-headset"></i>
                </div>
                <h4 className="title">
                  <a href="#">24/7 Backend Support and Monitoring</a>
                </h4>
                <p className="para">
                  At GoSafe, we pride ourselves on delivering top-notch security
                  services with the highest standards of accountability and
                  efficiency. To ensure that our security guards are always
                  where they need to be and are performing their duties
                  effectively, we utilize the advanced capabilities of
                  TrackForce Valiant.
                </p>
                <p className="para">
                  TrackForce Valiant is a state-of-the-art security management
                  platform that allows us to provide 24/7 support and real-time
                  monitoring of our security personnel. With its robust
                  features, we can:
                </p>
                <ul className="description mt-3">
                  <li>
                    <strong>Track Guard Locations in Real-Time: </strong>Using
                    GPS technology, we can monitor our guards’ movements to
                    ensure they are on-site and actively patrolling the
                    designated areas.
                  </li>
                  <li>
                    <strong>Instant Communication:</strong> Our control center
                    can communicate instantly with guards in the field, ensuring
                    quick response times to any incidents or emergencies.
                  </li>
                  <li>
                    <strong>Automated Reporting and Accountability:</strong>{" "}
                    TrackForce Valiant enables our guards to report incidents
                    instantly, allowing us to keep detailed records of all
                    activities and ensure full accountability at all times.
                  </li>
                  <li>
                    <strong>Comprehensive Incident Management:</strong> From
                    routine checks to emergency situations, our team is always
                    prepared to act swiftly and efficiently, supported by
                    detailed incident reports and real-time alerts.
                  </li>
                  <li>
                    <strong>24/7 Availability:</strong> We offer round-the-clock
                    backend support to address any issues or concerns that may
                    arise. Our dedicated support team is available at all times
                    to ensure that our clients receive prompt assistance and
                    that any security challenges are managed swiftly.
                  </li>
                  <li>
                    <strong>Real-Time Monitoring:</strong> Our state-of-the-art
                    monitoring systems enable us to track and oversee the
                    activities of our security personnel in real-time. This
                    allows us to ensure that all protocols are being followed
                    and that our guards are performing their duties to the
                    highest standards.
                  </li>
                  <li>
                    <strong>Accountability and Oversight:</strong> We have
                    established rigorous oversight mechanisms to monitor the
                    performance of our security guards. This includes regular
                    performance reviews, compliance checks, and real-time
                    feedback, ensuring that our personnel are accountable and
                    consistently meeting our high standards.
                  </li>
                </ul>
                <p>
                  By leveraging the power of TrackForce Valiant, GoSafe ensures
                  a seamless, reliable, and effective security service for our
                  clients. Our commitment to using the best technology available
                  reflects our dedication to providing the highest level of
                  protection and peace of mind, day and night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <Counter />
      <Footer />
    </>
  );
};

export default About;
