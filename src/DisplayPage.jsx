import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DisplayPage.css';

const DisplayPage = () => {
  const { state } = useLocation();
  const { formData } = state || {};
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="display-container">
      <h2>Your Submitted Information</h2>
      <div className="display-group">
        <strong>Name:</strong>
        <p>{formData.name}</p>
      </div>
      <div className="display-group">
        <strong>Email:</strong>
        <p>{formData.email}</p>
      </div>
      <div className="display-group">
        <strong>Address:</strong>
        <p>{formData.address}</p>
      </div>
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default DisplayPage;