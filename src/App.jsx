import "./App.less";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Filters from "./components/Filters/Filters";
import SignIn from "./components/SignIn/SignIn";
import SignUpFirstStep from "./components/SignUp/SignUpFirstStep";
import SignUpSecondStep from "./components/SignUp/SignUpSecondStep";
import AddObjectWarning from "./components/AddObject/AddObjectWarning";
import AddObject from "./components/AddObject/AddObject";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Map />
          <Filters />
        </main>
        {/* <SignIn/> */}
        {/* <SignUpFirstStep/> */}
        {/* <SignUpSecondStep /> */}
        {/* <AddObjectWarning/> */}
        {/* <AddObject/> */}
      </div>
    </>
  );
}

export default App;
