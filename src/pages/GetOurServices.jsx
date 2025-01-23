import React, { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const GetOurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      service: "",
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
        service: "",
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
          "https://gosafesecurity.co.uk/forms/send-mail-service.php",
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
          service: "",
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
            service: "",
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
      <PageTitle title="Get Our Services" subtitle="Get Our Services" />
      <section id="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3>Get Our Services</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-5 info">
                  <i className="bi bi-geo-alt"></i>
                  <p>
                    2121 Chapel Street, Chapel Street Student Halls, F12, Luton,
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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="form-group col-lg-6 mt-3 mt-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6 mt-3 mt-lg-0">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Choose services</option>
                      <option value="Door Supervisors">Door Supervisors</option>
                      <option value="Hotel Security">Hotel Security</option>
                      <option value="Event Security">Event Security</option>
                      <option value="Retail Security">Retail Security</option>
                      <option value="Office Security">Office Security</option>
                      <option value="Apartment/Building Security">Apartment/Building Security</option>
                      <option value="Guard Enforcement Services">Guard Enforcement Services</option>
                      <option value="Fire and Security Systems">Fire and Security Systems</option>
                      <option value="Corporate Security">Corporate Security</option>
                      <option value="Emergency and Temporary Security">Emergency and Temporary Security</option>
                      <option value="School and Campus Security">School and Campus Security</option>
                      <option value="Residential Security">Residential Security</option>
                      <option value="Mobile Patrol Security">Mobile Patrol Security</option>
                      <option value="Fire Marshal Trained Guards">Fire Marshal Trained Guards</option>
                    </select>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" title="Send Message" disabled={formStatus.loading}>
                      {formStatus.loading ? "Sending..." : "Get Now"}
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

export default GetOurServices;
