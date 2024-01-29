import React, { useState, useEffect } from "react";
import "./CategoryPage.less";
import Header from "../Header/Header";
import { Link, useLocation } from "react-router-dom";
import ObjectsList from "../ObjectsList/ObjectsList";
import Pagination from "../ObjectsList/Pagination";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { mainUrl } from "../../module";

const CategoryPage = ({ openPopup }) => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [objects, setObjects] = useState([]);
  const [objectsToDisplay, setObjectsToDisplay] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    async function getObjects() {
      fetch(`${mainUrl}/items/${itemId}`)
        .then((response) => response.json())
        .then((json) => {
          setItemInfo(json[0]);
          setObjects(json[0].objects);
        });
    }
    getObjects();
  }, [location]);

  return (
    <div className="CategoryPageRoot">
      <Header openPopup={openPopup} />
      <div className="category-page-main">
        <Breadcrumbs />

        <div className="category-details">
          <h2 className="category-title">{itemInfo.title}</h2>
          <p className="category-description">{itemInfo.description}</p>
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
