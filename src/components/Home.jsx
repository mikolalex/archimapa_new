import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";
import SignIn from "./SignIn/SignIn";
import SignUpFirstStep from "./SignUp/SignUpFirstStep";
import SignUpSecondStep from "./SignUp/SignUpSecondStep";
import AddObjectWarning from "./AddObject/AddObjectWarning";
import AddObject from "./AddObject/AddObject";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Map />
        <Filters />
      </main>
      {/* <SignIn/> */}
      {/* <SignUpFirstStep/> */}
      {/* <SignUpSecondStep /> */}
      {/* <AddObjectWarning/> */}
      {/* <AddObject /> */}
    </div>
  );
};

export default Home;
