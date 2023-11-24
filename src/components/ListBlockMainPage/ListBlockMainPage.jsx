import React from "react";
import ObjectsList from "../ObjectsList/ObjectsList";
import "./ListBlockMainPage.less";
import { useState, useEffect } from "react";
import Pagination from "../ObjectsList/Pagination";

const ListBlockMainPage = () => {
  const [objects, setObjects] = useState([]);
  const [objectsToDisplay, setObjectsToDisplay] = useState([]);

  useEffect(() => {
    async function getObjects() {
      fetch(
        "https://map.transsearch.net/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625"
      )
        .then((response) => response.json())
        .then((json) => setObjects(json));
    }
    getObjects();
  }, []);

  return (
    <div className="ListBlockMainPageRoot">
      <ObjectsList list={objectsToDisplay} />
      <Pagination objects={objects} setObjectsToDisplay={setObjectsToDisplay} />
    </div>
  );
};

export default ListBlockMainPage;
