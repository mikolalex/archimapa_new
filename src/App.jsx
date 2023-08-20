import "./App.less";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";
import { useState } from "react";

function App() {

  const [objects, setObjects] = useState([])

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home objects={objects} setObjects={setObjects} />} />
          <Route
            path="/object/:id"
            element={<ObjectPage objects={objects} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
