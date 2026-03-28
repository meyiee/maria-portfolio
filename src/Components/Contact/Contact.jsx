import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

        formData.append("access_key", "60fc8488-62da-490c-b65b-25e94009e331");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error submitting form:", data);
      setResult(data.message);
    }
  };

  return (
   <section className="contact" id="contact">
        <div className="container">
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
            <div className="gradient-line"></div>
            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Let's work together</h3>
                    <p>Feel free to reach out for collaborations or just a friendly hello</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>hello@maria.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+63 912 345 6789</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Manila, Philippines</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-form">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
            <span className="submit-result">{result}</span>
        </div>
        <div className="topsBlur"/>
        <div className="bottomsBlur"/>
    </section>
  )
}