import "./App.less";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [objects, setObjects] = useState([]);

  const [bounds, setBounds] = useState({
    east: 39.46289062500001,
    north: 52.89564866211353,
    south: 44.98034238084973,
    west: 23.4228515625,
  });

  async function getObjects(link) {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setObjects(json));
  }

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                objects={objects}
                setObjects={setObjects}
                bounds={bounds}
                setBounds={setBounds}
                getObjects={getObjects}
              />
            }
          />
          <Route
            path="/object/:id"
            element={
              <ObjectPage
                objects={objects}
                bounds={bounds}
                getObjects={getObjects}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
