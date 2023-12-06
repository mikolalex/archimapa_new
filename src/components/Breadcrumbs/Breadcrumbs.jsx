import React from "react";
import "./Breadcrumbs.less";

import { Link } from "react-router-dom";
import Item from "../Item";

const breadcrumbsArrow = (
  <img
    src="/icons/breadcrumb-arrow.png"
    alt=""
    className="breadcrumb-arrow-icon"
  />
);

const Breadcrumbs = ({ currentObject, itemId }) => {
  // console.log(currentObject);
  return (
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
      <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        Модернізм
      </Link>
      {breadcrumbsArrow}
      {/* <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        УАМ
      </Link> */}
      {currentObject ? (
        <Item currentObject={currentObject} categoryId={1} />
      ) : (
        <Link
          to={`/item/${itemId}`}
          style={{ textDecoration: "none" }}
          className="breadcrumb"
        >
          Item Name
        </Link>
      )}
      {currentObject && breadcrumbsArrow}
      {currentObject && (
        <Link style={{ textDecoration: "none" }} className="breadcrumb">
          {currentObject.title}
        </Link>
      )}
    </ul>
  );
};

export default Breadcrumbs;
