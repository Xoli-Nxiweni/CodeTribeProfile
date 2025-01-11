// components/ContactModal.js
import React, { useState } from 'react';
import './styles/ContactModal.css';

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as the user types
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email.';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message cannot be empty.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>
          <span className="close-icon">&times;</span>
        </button>
        <h2 className="modal-title">Get in Touch</h2>
        <p className="modal-description">
          Fill out the form below, and I'll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`form-input ${errors.name ? 'error-input' : ''}`}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`form-input ${errors.email ? 'error-input' : ''}`}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={`form-textarea ${errors.message ? 'error-input' : ''}`}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
