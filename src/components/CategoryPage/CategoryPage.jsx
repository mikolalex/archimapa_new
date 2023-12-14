import React, { useState, useEffect } from "react";
import "./CategoryPage.less";
import Header from "../Header/Header";
import { Link, useLocation } from "react-router-dom";
import ObjectsList from "../ObjectsList/ObjectsList";
import Pagination from "../ObjectsList/Pagination";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const CategoryPage = ({ openPopup }) => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [objects, setObjects] = useState([]);
  const [objectsToDisplay, setObjectsToDisplay] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    async function getObjects() {
      fetch(
        // "https://map.transsearch.net/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625"
        `https://map.transsearch.net/items/${itemId}`
      )
        .then((response) => response.json())
        .then((json) => {
          setItemInfo(json[0]);
          setObjects(json[0].objects);
        });
    }
    getObjects();
  }, []);

  return (
    <div className="CategoryPageRoot">
      <Header openPopup={openPopup} />
      <div className="category-page-main">
        <Breadcrumbs itemInfo={itemInfo} />

        <div className="category-details">
          <h2 className="category-title">Український Архітектурний Модерн</h2>
          <p className="category-description">
            Украї́нський архітекту́рний моде́рн, УАМ — один з українських
            оригінальних архітектурних стилів. Виник на початку XX століття.
            Існував і розвивався протягом майже 40 років (з 1903 по 1941 роки).
            В основі УАМ лежать народні традиції хатнього і церковного
            будівництва і досягнення української професійної архітектури і перш
            за все барокової (див. українське бароко), вплив якої, починаючи з
            1910 року був помітним і навіть зростаючим. Сильним був також вплив
            європейського модерну.
          </p>
        </div>
        <div className="category-objects-block">
          <ObjectsList list={objectsToDisplay} />
          <div className="pagination-block">
            <div className="empty-block"></div>
            {/* <button
              className="show-more-button"
              onClick={() =>
                setDisplayedSlice((prev) => [
                  prev[0],
                  (prev[1] = prev[1] + displayedObjectsQty),
                ])
              }
            >
              Show More
            </button> */}
            <Pagination
              objects={objects}
              setObjectsToDisplay={setObjectsToDisplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
