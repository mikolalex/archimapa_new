import "./App.less";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Filters from "./components/Filters/Filters";
import SignIn from "./components/SignIn/SignIn";
import SignUpFirstStep from "./components/SignUp/SignUpFirstStep";
import SignUpSecondStep from "./components/SignUp/SignUpSecondStep";
import AddObjectWarning from "./components/AddObject/AddObjectWarning";
import AddObject from "./components/AddObject/AddObject";
import { Routes, Route } from "react-router-dom";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import Home from "./components/Home";

function App() {
  const objects = [
    {
      id: 1,
      geocode: [50.43064609085728, 30.48826272549254],
      popup: "marker1",
    },
    {
      id: 2,
      geocode: [47.951618726638536, 33.357941298473676],
      popup: "marker2",
    },
    {
      id: 3,
      geocode: [48.155339589696794, 24.28114418795262],
      popup: "marker3",
    },
  ];

  return (
    <>
      <div className="App">
        {/* <Header />
        <main>
          <Map />
          <Filters />
        </main>
        <SignIn/> 
        <SignUpFirstStep/>
        <SignUpSecondStep />
        <AddObjectWarning/>
        <AddObject/>  */}
        <Routes>
          <Route path="/" element={<Home objects={objects} />} />
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
