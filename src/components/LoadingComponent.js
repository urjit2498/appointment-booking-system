// LoadingComponent.js
import React from 'react';
import '../styles/LoadingComponent.css'; // Import your core CSS file

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;
