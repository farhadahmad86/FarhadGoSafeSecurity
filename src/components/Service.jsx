import React from "react";

import { Link } from "react-router-dom"; 
const Services = () => {
  const services = [
    {
      title: "Security Services Nationwide",
      description:
        "Supplying comprehensive and nationwide security solutions tailored to meet diverse needs.",
    },
    {
      title: "Office Security",
      description:
        "Guaranteeing the highest standards of safety and protection for your workplace environment.",
    },
    {
      title: "Apartment/Building Security",
      description:
        "Safeguarding residential and commercial properties with tailored security solutions.",
    },
    {
      title: "Guard Enforcement",
      description:
        "Delivering disciplined and effective security through professional guard patrols and enforcement.",
    },
    {
      title: "Fire and Security Systems",
      description:
        "Implementing advanced fire and security solutions for comprehensive protection.",
    },
    {
      title: "Fire Marshal Trained Guards",
      description:
        "Ensuring top-level fire safety and emergency response by deploying our team of certified security experts.",
    },
    {
      title: "Retail Security",
      description:
        "Our retail security services protect customers and inventory, ensuring a safe shopping experience.",
    },
    {
      title: "Corporate Security",
      description:
        "GoSafe provides premier corporate security solutions to safeguard your business with expert protection.",
    },
    {
      title: "Emergency and Temporary",
      description:
        "GoSafe offers quick, reliable security solutions for urgent and temporary needs with a ready-to-deploy team.",
    },
    {
      title: "School and Campus Security",
      description:
        "GoSafe offers tailored school and campus security solutions to protect students, staff, and facilities.",
    },
    {
      title: "Residential Security",
      description:
        "GoSafe protects your home with patrols, surveillance, and access control.",
    },
    {
      title: "Mobile Patrol Security",
      description:
        "Our mobile patrol security services offer a strong deterrent against threats and provide rapid response.",
    },
  ];

  return (
    <section id="services" className="section-bg">
    <div className="container" data-aos="fade-up">
      <div className="row about-extra" style={{ marginTop: "110px" }}>
        <div className="col-lg-6 ks" data-aos="fade-left">
          <h2>What Sets GoSafe Apart for Success</h2>
        </div>
        <div className="col-lg-6" data-aos="fade-right">
          <p style={{ marginTop: "20px" }}>
            At GoSafe, we oversee every aspect of security operations from
            start to finish. This hands-on approach allows businesses to
            engage directly with our team, while select programs are
            executed through our trusted network of partners.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "75px" }}>
        {services.map((service, index) => (
          <div
            className="col-md-4 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="100"
            key={index}
          >
            <div className="box">
              <h4 className="title">
                <span
                  style={{
                    borderRight: "4px solid black",
                    marginRight: "10px",
                  }}
                ></span>
                {service.title}
              </h4>
              <p className="description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;
