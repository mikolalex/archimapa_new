import "./App.less";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUpFirstStep from "./components/SignUp/SignUpFirstStep";
import SignUpSecondStep from "./components/SignUp/SignUpSecondStep";
import AddObjectWarning from "./components/AddObject/AddObjectWarning";
import AddObject from "./components/AddObject/AddObject";
import InfoPopup from "./components/InfoPopup/InfoPopup";
import AddObjectMap from "./components/AddObjectMap/AddObjectMap";
import json from "./config.json";

function App() {
  const [bounds, setBounds] = useState({
    east: 39.46289062500001,
    north: 52.89564866211353,
    south: 44.98034238084973,
    west: 23.4228515625,
  });

  function getConfig(config) {
    return json[config];
  }

  //optns

  const categories = getConfig("objectCustomFields");
  const [fieldData, setFieldData] = useState({});

  const categoriesId = () => {
    const ids = [];
    categories.forEach((category) =>
      category.type === "select"
        ? ids.push(Object.values(category.field_data).join())
        : null
    );
    return ids;
  };

  async function getFieldData(id) {
    fetch(`https://map.transsearch.net/items/category/${id}`)
      .then((response) => response.json())
      .then((json) => setFieldData((prev) => ({ ...prev, [id]: json })));
  }

  useEffect(() => {
    categoriesId().forEach((id) => {
      getFieldData(id);
    });
  }, [categories]);

  //popups

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
    setPopups([{ type: popupName, props: customProps }]);
  };

  return (
    <>
      <div className="">
        {popups.map(({ type, props }, i) => {
          const Component = popupsMapping[type];
          return (
            <div className="componentWrapper" key={i}>
              <Component {...props} closePopup={() => setPopups([])} />
            </div>
          );
        })}
      </div>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bounds={bounds}
                setBounds={setBounds}
                openPopup={openPopup}
                getConfig={getConfig}
                fieldData={fieldData}
              />
            }
          />
          <Route
            path="/object/:id"
            element={
              <ObjectPage
                bounds={bounds}
                // openAddObjectPopup={openAddObjectPopup}
                // openSignInPopup={openSignInPopup}
                // openSigUpnPopup={openSigUpnPopup}
                openPopup={openPopup}
              />
            }
          />
        </Routes>

        {/* <AddObjectWarning/> */}
      </div>
    </>
  );
}

export default App;
