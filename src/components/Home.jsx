import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";

const Home = ({ bounds, setBounds, openPopup, getConfig, fieldData }) => {
  return (
    <div>
      <Header
        openPopup={openPopup}
        getConfig={getConfig}
        fieldData={fieldData}
      />
      <main>
        <Map bounds={bounds} setBounds={setBounds} />
        <Filters />
      </main>
    </div>
  );
};

export default Home;
