import "./App.less";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import useValidation from "./hooks/useValidation";
import SignIn from "./components/SignIn/SignIn";
import SignUpFirstStep from "./components/SignUp/SignUpFirstStep";
import SignUpSecondStep from "./components/SignUp/SignUpSecondStep";
import AddObjectWarning from "./components/AddObject/AddObjectWarning";
import AddObject from "./components/AddObject/AddObject";
import InfoPopup from "./components/InfoPopup/InfoPopup";
import json from "./config.json";

function App() {
  const [bounds, setBounds] = useState({
    east: 39.46289062500001,
    north: 52.89564866211353,
    south: 44.98034238084973,
    west: 23.4228515625,
  });

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
  const [isWindowBlured, setIsWindowBlured] = useState({
    map: false,
    popup: false,
  });

  const [latitude, setLatitude, validateLatitude, latitudeError] =
    useValidation("", (value) => (value ? false : "Please enter the latitude"));
  const [longitude, setLongitude, validateLongitude, longitudeError] =
    useValidation("", (value) =>
      value ? false : "Please enter the longitude"
    );

  const closeAllPopups = () => {
    setIsAddObjectOpen(false);
    setIsSignInOpen(false);
    setIsSignUpFirstStepOpen(false);
    setIsSignUpSecondStepOpen(false);
  };

  const openAddObjectPopup = () => {
    closeAllPopups();
    setIsAddObjectOpen(true);
    setIsWindowBlured((prev) => ({ ...prev, popup: true }));
  };
  const openSignInPopup = () => {
    closeAllPopups();
    setIsSignInOpen(true);
    setIsWindowBlured((prev) => ({ ...prev, popup: true }));
  };
  const openSigUpnPopup = () => {
    closeAllPopups();
    setIsSignUpFirstStepOpen(true);
    setIsWindowBlured((prev) => ({ ...prev, popup: true }));
  };

  //optns
  const categories = getConfig("objectCustomFields");
  const [fieldData, setFieldData] = useState({});

  const getOptions = () => {
    const categoriesId = [];
    categories.forEach((category) =>
      category.type === "select"
        ? categoriesId.push(Object.values(category.field_data).join())
        : null
    );

    categoriesId.forEach((id) => {
      getFieldData(id);
    });

    async function getFieldData(id) {
      useEffect(() => {
        fetch(`https://map.transsearch.net/items/category/${id}`)
          .then((response) => response.json())
          .then((json) => setFieldData((prev) => ({ ...prev, [id]: json })));
      }, []);
    }
  };
  getOptions();

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bounds={bounds}
                setBounds={setBounds}
                isWindowBlured={isWindowBlured}
                setIsWindowBlured={setIsWindowBlured}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                openAddObjectPopup={openAddObjectPopup}
                openSignInPopup={openSignInPopup}
                openSigUpnPopup={openSigUpnPopup}
              />
            }
          />
          <Route
            path="/object/:id"
            element={
              <ObjectPage
                bounds={bounds}
                openAddObjectPopup={openAddObjectPopup}
                openSignInPopup={openSignInPopup}
                openSigUpnPopup={openSigUpnPopup}
              />
            }
          />
        </Routes>

        {isSignInOpen && (
          <SignIn
            setIsSignInOpen={setIsSignInOpen}
            objToFormData={objToFormData}
            setInfoText={setInfoText}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsWindowBlured={setIsWindowBlured}
            isWindowBlured={isWindowBlured}
          />
        )}

        {isSignUpFirstStepOpen && (
          <SignUpFirstStep
            setIsSignUpFirstStepOpen={setIsSignUpFirstStepOpen}
            setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
            setEmailToSend={setEmailToSend}
            setIsWindowBlured={setIsWindowBlured}
            isWindowBlured={isWindowBlured}
          />
        )}

        {isSignUpSecondStepOpen && (
          <SignUpSecondStep
            setIsSignUpSecondStepOpen={setIsSignUpSecondStepOpen}
            emailToSend={emailToSend}
            setInfoText={setInfoText}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsWindowBlured={setIsWindowBlured}
            isWindowBlured={isWindowBlured}
          />
        )}

        {/* <AddObjectWarning/> */}
        {isAddObjectOpen && (
          <AddObject
            objToFormData={objToFormData}
            setIsAddObjectOpen={setIsAddObjectOpen}
            setIsWindowBlured={setIsWindowBlured}
            isWindowBlured={isWindowBlured}
            latitude={latitude}
            setLatitude={setLatitude}
            validateLatitude={validateLatitude}
            latitudeError={latitudeError}
            longitude={longitude}
            setLongitude={setLongitude}
            validateLongitude={validateLongitude}
            longitudeError={longitudeError}
            getConfig={getConfig}
            fieldData={fieldData}
          />
        )}

        {infoText && (
          <InfoPopup
            infoText={infoText}
            setInfoText={setInfoText}
            setIsWindowBlured={setIsWindowBlured}
            isWindowBlured={isWindowBlured}
          />
        )}

        {(isWindowBlured.map || isWindowBlured.popup) && (
          <div className="blured"></div>
        )}
      </div>
    </>
  );
}

export default App;
