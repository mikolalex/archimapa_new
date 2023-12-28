import React, { useEffect, useState } from "react";
import "./Breadcrumbs.less";
import { Link, useLocation } from "react-router-dom";
import { mainUrl } from "../../module";

const Breadcrumbs = ({ currentObject }) => {
  const breadcrumbsArrow = (
    <img
      src="/icons/breadcrumb-arrow.png"
      alt=""
      className="breadcrumb-arrow-icon"
    />
  );

  let location = useLocation();
  let itemId = location.pathname.split("/")[2];

  const [parent, setParent] = useState([]);
  const [item, setItem] = useState([]);

  async function getParent() {
    fetch(`${mainUrl}/items/${item[0].parent_id}`)
      .then((response) => response.json())
      .then((json) => setParent(json));
  }
  async function getItem() {
    fetch(`${mainUrl}/items/${itemId}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }
  useEffect(() => {
    getItem();
    setParent([]);
  }, [location]);
  useEffect(() => {
    getParent();
  }, [item]);

  return (
    <>
      {((currentObject && currentObject.items) || item[0]) && (
        <ul className="breadcrumbs">
          <li>
            <Link
              to={"/"}
              style={{ textDecoration: "none" }}
              className="breadcrumb"
            >
              Головна
            </Link>
          </li>

          {breadcrumbsArrow}
          {parent[0] && (
            <Link
              to={`/item/${parent[0].id}`}
              style={{ textDecoration: "none" }}
              className="breadcrumb"
            >
              {parent[0].title}
              {breadcrumbsArrow}
            </Link>
          )}

          {currentObject && currentObject.items && (
            <Link
              to={`/item/${currentObject.items[0].id}`}
              style={{ textDecoration: "none" }}
              className="breadcrumb"
            >
              {currentObject.items[0].name}
            </Link>
          )}
          {item[0] && (
            <Link
              to={`/item/${item[0].id}`}
              style={{ textDecoration: "none" }}
              className="breadcrumb"
            >
              {item[0].title}
            </Link>
          )}
          {currentObject && breadcrumbsArrow}
          {currentObject && (
            <Link style={{ textDecoration: "none" }} className="breadcrumb">
              {currentObject.title}
            </Link>
          )}
        </ul>
      )}
    </>
  );
};

export default Breadcrumbs;
