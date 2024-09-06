// components/WelcomeScreen.js
import React from "react";
import './WelcomeScreen.css'; // Import the CSS file

const WelcomeScreen = ({ startSurvey }) => {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Welcome to the Customer Survey!</h1>
      <button className="start-button" onClick={startSurvey}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
