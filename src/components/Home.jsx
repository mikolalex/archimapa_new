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
import useValidation from "../hooks/useValidation";

const Home = ({ objects, setObjects }) => {
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

  const [emailToSend, setEmailToSend] = useState("");

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpFirstStepOpen, setIsSignUpFirstStepOpen] = useState(false);
  const [isSignUpSecondStepOpen, setIsSignUpSecondStepOpen] = useState(false);
  const [isAddObjectOpen, setIsAddObjectOpen] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWindowBlured, setIsWindowBlured] = useState(false);

  const [latitude, setLatitude, validateLatitude, latitudeError] =
    useValidation("", (value) => (value ? false : "Please enter the latitude"));
  const [longitude, setLongitude, validateLongitude, longitudeError] =
    useValidation("", (value) =>
      value ? false : "Please enter the longitude"
    );

  return (
    <div>
      <Header
        setIsSignInOpen={setIsSignInOpen}
        setIsSignUpFirstStepOpen={setIsSignUpFirstStepOpen}
        setIsAddObjectOpen={setIsAddObjectOpen}
      />
      <main>
        <Map
          objects={objects}
          isWindowBlured={isWindowBlured}
          setIsWindowBlured={setIsWindowBlured}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setObjects={setObjects}
        />
        <Filters />
      </main>
      {isSignInOpen && (
        <SignIn
          setIsSignInOpen={setIsSignInOpen}
          objToFormData={objToFormData}
          setInfoText={setInfoText}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {isSignUpFirstStepOpen && (
        <SignUpFirstStep
          setIsSignUpFirstStepOpen={setIsSignUpFirstStepOpen}
          setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
          setEmailToSend={setEmailToSend}
        />
      )}

      {isSignUpSecondStepOpen && (
        <SignUpSecondStep
          setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
          emailToSend={emailToSend}
          setInfoText={setInfoText}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {/* <AddObjectWarning/> */}
      {isAddObjectOpen && (
        <AddObject
          objToFormData={objToFormData}
          setIsAddObjectOpen={setIsAddObjectOpen}
          setIsWindowBlured={setIsWindowBlured}
          latitude={latitude}
          setLatitude={setLatitude}
          validateLatitude={validateLatitude}
          latitudeError={latitudeError}
          longitude={longitude}
          setLongitude={setLongitude}
          validateLongitude={validateLongitude}
          longitudeError={longitudeError}
          getConfig={getConfig}
        />
      )}

      {infoText && <InfoPopup infoText={infoText} setInfoText={setInfoText} />}

      {isWindowBlured && <div className="blured"></div>}
    </div>
  );
};

export default Home;
