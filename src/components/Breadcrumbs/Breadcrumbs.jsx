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

const Breadcrumbs = ({ currentObject, itemInfo }) => {
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
      {/* <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        Модернізм
      </Link>
      {breadcrumbsArrow} */}
      {/* <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        УАМ
      </Link> */}
      {currentObject && currentObject.items && (
        <Link
          to={`/item/${currentObject.items[0].id}`}
          style={{ textDecoration: "none" }}
          className="breadcrumb"
        >
          {currentObject.items[0].name}
        </Link>
      )}
      {itemInfo && (
        <Link
          to={`/item/${itemInfo.id}`}
          style={{ textDecoration: "none" }}
          className="breadcrumb"
        >
          {itemInfo.title}
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
