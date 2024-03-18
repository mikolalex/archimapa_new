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

  const [requestedFilters, setRequestedFilters] = useState({});

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
              requestedFilters={requestedFilters}
            />
          )}
        </div>

        <Filters
          setRequestedFilters={setRequestedFilters}
          requestedFilters={requestedFilters}
        />
      </main>
    </div>
  );
};

export default Home;
