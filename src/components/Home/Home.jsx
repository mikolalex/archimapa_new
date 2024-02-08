import React, { useState, useEffect } from "react";
import "./Home.less";
import Header from "../Header/Header";
import MapBlock from "../Map/MapBlock";
import Filters from "../Filters/Filters";
import ListBlockMainPage from "../ListBlockMainPage/ListBlockMainPage";
import MapListSwitcher from "./MapListSwitcher";
import { mainUrl } from "../../module";


const Home = ({ openPopup, setPopups }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => setPopups([]), [isListOpen]);

  const [objects, setObjects] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([])

  useEffect(() => {
    async function getObjects() {
      fetch(
        `${mainUrl}/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625`
      )
        .then((response) => response.json())
        .then((json) => {setObjects(json)
          //  , setFilteredObjects(json)
          });
    }
    getObjects();
  }, []);

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
              objects={objects}
              setObjects={setObjects}
              filteredObjects={filteredObjects} setFilteredObjects={setFilteredObjects} 
            />
          )}
        </div>

        <Filters
         objects={objects} setObjects={setObjects} 
        filteredObjects={filteredObjects} setFilteredObjects={setFilteredObjects} />
 
      </main>
    </div>
  );
};

export default Home;
