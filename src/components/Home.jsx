import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";

const Home = ({
  bounds,
  setBounds,
  setLatitude,
  setLongitude,
  openAddObjectPopup,
  openSignInPopup,
  openSigUpnPopup,
  isWindowBlured,
  setIsWindowBlured,
}) => {
  return (
    <div>
      <Header
        openAddObjectPopup={openAddObjectPopup}
        openSignInPopup={openSignInPopup}
        openSigUpnPopup={openSigUpnPopup}
      />
      <main>
        <Map
          isWindowBlured={isWindowBlured}
          setIsWindowBlured={setIsWindowBlured}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          bounds={bounds}
          setBounds={setBounds}
        />
        <Filters />
      </main>
    </div>
  );
};

export default Home;
