import React, { useState,useEffect } from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    errorMessage: "",
    successMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      // websiteUrl: "",
      phone: "",
    });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your message has been sent successfully!",
    });

    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });

    try {
      const response = await fetch(
        "https://gosafesecurity.co.uk/forms/send-mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors", // Do not use if server sends back JSON data
        }
      );

      const result = await response.json();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        // websiteUrl: "",
        phone: "",
      });
      if (response.ok) {
        setFormStatus({
          loading: false,
          errorMessage: "",
          successMessage: result.success,
        });
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          loading: false,
          errorMessage: result.error,
          successMessage: "",
        });
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        errorMessage:
          "There was an error sending your message. Please try again later.",
        successMessage: "",
      });
    }
  };

  return (
    <>
      <PageTitle
        title="Contact Us"
        subtitle="Contact Us"
      />
      <section id="contact">
        <div
          className="container-fluid "
          data-aos="fade-up"
        >
          <div className="section-header">
            <h3>Contact Us</h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="map mb-4 mb-lg-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.1495417611477!2d-0.4196200238126074!3d51.87648278367448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876484339d17525%3A0xe66eedaf9e349ae7!2sChapel%20St%2C%20Luton%2C%20UK!5e0!3m2!1sen!2s!4v1724695320110!5m2!1sen!2s"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: "0px" }}
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-5 info">
                  <i className="bi bi-geo-alt"></i>
                  <p>
                    2121 Chapel Street, Chapel Street Student Hails, F12, Luton,
                    England, LU12SE
                  </p>
                </div>
                <div className="col-md-4 info">
                  <i className="bi bi-envelope"></i>
                  <p>info@gosafesecurity.co.uk</p>
                </div>
                <div className="col-md-3 info">
                  <i className="bi bi-phone"></i>
                  <p>+44 744 8966 550</p>
                </div>
              </div>
              <div className="form">
                <form>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6 mt-3 mt-lg-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" title="Send Message">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
