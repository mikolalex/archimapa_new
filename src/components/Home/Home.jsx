import React, { useState, useEffect } from "react";
import "./Home.less";
import Header from "../Header/Header";
import MapBlock from "../Map/MapBlock";
import Filters from "../Filters/Filters";
import ListBlockMainPage from "../ListBlockMainPage/ListBlockMainPage";
import MapListSwitcher from "./MapListSwitcher";

const Home = ({ openPopup, setPopups }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => setPopups([]), [isListOpen]);

  const [bounds, setBounds] = useState({
    east: 39.46289062500001,
    north: 52.89564866211353,
    south: 44.98034238084973,
    west: 23.4228515625,
  });

  return (
    <div>
      <Header openPopup={openPopup} setIsListOpen={setIsListOpen} />
      <main>
        <div className="main-block">
          <MapListSwitcher
            setIsListOpen={setIsListOpen}
            isListOpen={isListOpen}
          />
          {isListOpen ? (
            <ListBlockMainPage openPopup={openPopup} />
          ) : (
            <MapBlock
              openPopup={openPopup}
              bounds={bounds}
              setBounds={setBounds}
            />
          )}
        </div>

        <Filters bounds={bounds} />
      </main>
    </div>
  );
};

export default Home;
