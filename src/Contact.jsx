import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub 
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "Mouni@123",  // Replace with your EmailJS Service ID
      "Mouni@123", // Replace with your EmailJS Template ID
      formRef.current,
      "oiTPeL185uPB8ImmB"  // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("Email failed to send:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        GET IN <span>TOUCH</span>
      </h2>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h3>DON'T BE SHY!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>123 Street, New York City, USA 750056</p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>steve@mail.com</p>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <p>+216 21 184 010</p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
           
            <a href="https://www.linkedin.com/in/mounika-devi-paila-881b81256/" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mounikadevipaila" target="_blank"><FaGithub /></a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="YOUR SUBJECT"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
