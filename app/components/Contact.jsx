// components/Contact.js

"use client"; 

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:pankajkhatri4698@example.com?subject=Contact%20Form%20Submission&body=Name: ${encodeURIComponent(formData.name)}%0D%0AContact: ${encodeURIComponent(formData.contact)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let&apos;s Get In Touch!</h2>
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
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="contact" 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  value={formData.contact}
                  onChange={handleChange}
                />
                <label htmlFor="contact">Contact</label>
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
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

