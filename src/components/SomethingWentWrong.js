import React from 'react';
import '../styles/SomethingWentWrong.css';

const SomethingWentWrong = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-box">
        <span className="error-icon">&#9888;</span>
        <p className="error-message">{message || 'Something went wrong.'}</p>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
