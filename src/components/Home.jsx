import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";
import SignIn from "./SignIn/SignIn";
import SignUpFirstStep from "./SignUp/SignUpFirstStep";
import SignUpSecondStep from "./SignUp/SignUpSecondStep";
import AddObjectWarning from "./AddObject/AddObjectWarning";
import AddObject from "./AddObject/AddObject";
import { useState } from "react";
import InfoPopup from "./InfoPopup/InfoPopup";
import json from "../config.json";

const Home = ({ objects }) => {
  const objToFormData = (obj) => {
    const fd = new FormData();
    for (let i in obj) {
      fd.append(i, obj[i]);
    }
    return fd;
  };

  function getConfig(config) {
    return json[config];
  }
  console.log(getConfig("objectCustomFields"));

  const [emailToSend, setEmailToSend] = useState("");

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpFirstStepOpen, setIsSignUpFirstStepOpen] = useState(false);
  const [isSignUpSecondStepOpen, setIsSignUpSecondStepOpen] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header
        setIsSignInOpen={setIsSignInOpen}
        setIsSignUpFirstStepOpen={setIsSignUpFirstStepOpen}
      />
      <main>
        <Map objects={objects} />
        <Filters />
      </main>
      {isSignInOpen ? (
        <SignIn
          setIsSignInOpen={setIsSignInOpen}
          objToFormData={objToFormData}
          setInfoText={setInfoText}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : null}

      {isSignUpFirstStepOpen ? (
        <SignUpFirstStep
          setIsSignUpFirstStepOpen={setIsSignUpFirstStepOpen}
          setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
          setEmailToSend={setEmailToSend}
        />
      ) : null}

      {isSignUpSecondStepOpen ? (
        <SignUpSecondStep
          setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
          emailToSend={emailToSend}
          setInfoText={setInfoText}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : null}

      {/* <AddObjectWarning/> */}
      {/* <AddObject /> */}
      {infoText ? (
        <InfoPopup infoText={infoText} setInfoText={setInfoText} />
      ) : null}
    </div>
  );
};

export default Home;
