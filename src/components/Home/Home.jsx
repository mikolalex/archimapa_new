import React from "react";
import "./Home.less";
import Header from "../Header/Header";
import MapBlock from "../Map/MapBlock";
import Filters from "../Filters/Filters";
import ListBlockMainPage from "../ListBlockMainPage/ListBlockMainPage";
import { useState } from "react";
import MapListSwitcher from "./MapListSwitcher";

const Home = ({ openPopup }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <div>
      <Header openPopup={openPopup} />
      <main>
        <div className="main-block">
          <MapListSwitcher
            setIsListOpen={setIsListOpen}
            isListOpen={isListOpen}
          />
          {isListOpen ? (
            <ListBlockMainPage openPopup={openPopup} />
          ) : (
            <MapBlock openPopup={openPopup} />
          )}
        </div>

        <Filters />
      </main>
    </div>
  );
};

export default Home;
