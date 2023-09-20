import React from "react";
import Header from "./Header/Header";
import MapBlock from "./Map/MapBlock";
import Filters from "./Filters/Filters";

const Home = ({ openPopup }) => {
  return (
    <div>
      <Header openPopup={openPopup} />
      <main>
        <MapBlock  openPopup={openPopup} />
        <Filters />
      </main>
    </div>
  );
};

export default Home;
