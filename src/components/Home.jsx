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

const Home = ({ objects }) => {
  const objToFormData = (obj) => {
    const fd = new FormData();
    for (let i in obj) {
      fd.append(i, obj[i]);
    }
    return fd;
  };

  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <div>
      <Header setIsSignInOpen={setIsSignInOpen} />
      <main>
        <Map objects={objects} />
        <Filters />
      </main>
      {isSignInOpen ? (
        <SignIn
          setIsSignInOpen={setIsSignInOpen}
          objToFormData={objToFormData}
        />
      ) : null}

      {/* <SignUpFirstStep/> */}
      {/* <SignUpSecondStep /> */}
      {/* <AddObjectWarning/> */}
      {/* <AddObject /> */}
    </div>
  );
};

export default Home;
