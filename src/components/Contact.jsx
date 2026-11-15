// components/Contact.js

import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      '',
      message,
    ].join('\r\n');
    window.location.href = `mailto:4699pankajkhatri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-3">Ready to start your next project with me? Send me a message and I will get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-3">

          <div className="col-lg-6 p-4 rounded-4 shadow-lg">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="name" 
                  type="text" 
                  placeholder="Enter your name..." 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Contact number (optional)</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  maxLength={120}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea 
                  className="form-control" 
                  id="message" 
                  placeholder="Enter your message here..." 
                  style={{ height: '10rem' }} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="message">Message</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-xl btn-theme" id="submitButton" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

