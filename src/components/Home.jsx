import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Filters from "./Filters/Filters";

const Home = ({ openPopup }) => {
  return (
    <div>
      <Header openPopup={openPopup} />
      <main>
        <Map />
        <Filters />
      </main>
    </div>
  );
};

export default Home;
