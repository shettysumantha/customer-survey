import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyScreen from "./components/SurveyScreen";
import ThankYouScreen from "./components/ThankYouScreen";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const startSurvey = () => {
    setShowWelcome(false);
  };

  const completeSurvey = () => {
    setSurveyCompleted(true);
  };

  return (
    <div className="App">
      {showWelcome && <WelcomeScreen startSurvey={startSurvey} />}
      {!showWelcome && !surveyCompleted && (
        <SurveyScreen completeSurvey={completeSurvey} />
      )}
      {surveyCompleted && <ThankYouScreen />}
    </div>
  );
};

export default App;

