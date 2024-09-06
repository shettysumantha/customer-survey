// components/ThankYouScreen.js
import React, { useEffect } from "react";

const ThankYouScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload(); // Redirect to welcome screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Thank you for your time!</h1>
      <p>You will be redirected to the welcome screen in 5 seconds...</p>
    </div>
  );
};

export default ThankYouScreen;
