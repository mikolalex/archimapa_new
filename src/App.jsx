import "./App.less";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";
import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUpFirstStep from "./components/SignUp/SignUpFirstStep";
import SignUpSecondStep from "./components/SignUp/SignUpSecondStep";
import AddObjectWarning from "./components/AddObject/AddObjectWarning";
import AddObject from "./components/AddObject/AddObject";
import InfoPopup from "./components/InfoPopup/InfoPopup";
import AddObjectMap from "./components/AddObjectMap/AddObjectMap";

function App() {
  const [popups, setPopups] = useState([]);

  const popupsMapping = {
    AddObject: AddObject,
    SignIn: SignIn,
    SignUpFirstStep: SignUpFirstStep,
    SignUpSecondStep: SignUpSecondStep,
    InfoPopup: InfoPopup,
    AddObjectMap: AddObjectMap,
  };

  const openPopup = (popupName, customProps) => {
    setPopups((popups) => [...popups, { type: popupName, props: customProps }]);
  };

  return (
    <>
      <div className="">
        {popups.map(({ type, props }, i) => {
          const Component = popupsMapping[type];
          return (
            <div className="componentWrapper" key={i}>
              <Component
                {...props}
                closePopup={() =>
                  setPopups((popups) =>
                    popups.filter((popup) => popup.type !== type)
                  )
                }
              />
            </div>
          );
        })}
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home openPopup={openPopup} />} />
          <Route
            path="/object/:id"
            element={<ObjectPage openPopup={openPopup} />}
          />
        </Routes>

        {/* <AddObjectWarning/> */}
      </div>
    </>
  );
}

export default App;
