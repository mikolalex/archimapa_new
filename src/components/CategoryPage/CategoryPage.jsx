import React, { useState } from "react";
import "./CategoryPage.less";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CategoryPage = ({ openPopup }) => {
  const [objects, setObjects] = useState([]);
  const [objectsToDisplay, setObjectsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesQty, setPagesQty] = useState([]);
  const [displayedSlice, setDisplayedSlice] = useState([0, 20]);
  const displayedObjectsQty = 20;

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

  useEffect(() => {
    const end = currentPage * displayedObjectsQty;
    const start = end - displayedObjectsQty;
    setDisplayedSlice([start, end]);
  }, [objects, currentPage]);

  useEffect(() => {
    const pages = Math.ceil((objects.length - 1) / displayedObjectsQty);
    for (let i = 1; i <= pages; i++) {
      setPagesQty((prev) => [...prev, i]);
    }
  }, [objects]);

  useEffect(() => {
    setObjectsToDisplay(objects.slice(displayedSlice[0], displayedSlice[1]));
  }, [displayedSlice]);

  return (
    <div className="CategoryPageRoot">
      <Header openPopup={openPopup} />
      <div className="category-page-main">
        <div className="category-breadcrumbs">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <p className="breadcrumb">Головна</p>
          </Link>
          <img
            src="/icons/breadcrumb-arrow.png"
            alt=""
            className="breadcrumb-arrow-icon"
          />
          <p className="breadcrumb">Модернізм</p>
          <img
            src="/icons/breadcrumb-arrow.png"
            alt=""
            className="breadcrumb-arrow-icon"
          />
          <p className="breadcrumb">УАМ</p>
        </div>

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
          <ul className="category-objects-list">
            {objectsToDisplay.map((object) => (
              <li className="category-object-item" key={object.id}>
                <div>
                  <img
                    src="/img/example_img.png"
                    alt=""
                    className="category-object-item-img"
                  />
                  <h3 className="category-object-item-title">{object.title}</h3>
                  <p className="category-object-item-description">
                    {object.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="pagination-block">
            <div className="empty-block"></div>
            <button
              className="show-more-button"
              onClick={() =>
                setDisplayedSlice((prev) => [
                  prev[0],
                  (prev[1] = prev[1] + displayedObjectsQty),
                ])
              }
            >
              Show More
            </button>
            <ul className="pagination">
              {pagesQty.map((page) =>
                page < 3 ? (
                  <li
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "page-number active"
                        : "page-number"
                    }
                  >
                    {page}
                  </li>
                ) : page === pagesQty.length ? (
                  <li
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "page-number active"
                        : "page-number"
                    }
                  >
                    {page}
                  </li>
                ) : (
                  <li className="page-number" key={"..."}>
                    ...
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
