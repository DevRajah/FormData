import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/display', { state: { formData } });
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Next</button>
      </form>
    </div>
  );
};

export default FormPage;