import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";

const Home = ({
  bounds,
  setBounds,
  openAddObjectPopup,
  openSignInPopup,
  openSigUpnPopup,
}) => {
  return (
    <div>
      <Header
        openAddObjectPopup={openAddObjectPopup}
        openSignInPopup={openSignInPopup}
        openSigUpnPopup={openSigUpnPopup}
      />
      <main>
        <Map bounds={bounds} setBounds={setBounds} />
        <Filters />
      </main>
    </div>
  );
};

export default Home;
