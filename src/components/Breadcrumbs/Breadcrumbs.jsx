import React from "react";
import "./Breadcrumbs.less";

import { Link } from "react-router-dom";

const breadcrumbsArrow = (
  <img
    src="/icons/breadcrumb-arrow.png"
    alt=""
    className="breadcrumb-arrow-icon"
  />
);

const Breadcrumbs = ({ currentObject }) => {
  return (
    <div className="breadcrumbs">
      <Link to={"/"} style={{ textDecoration: "none" }} className="breadcrumb">
        Головна
      </Link>
      {breadcrumbsArrow}
      <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        Модернізм
      </Link>
      {breadcrumbsArrow}
      <Link
        to={"/category"}
        style={{ textDecoration: "none" }}
        className="breadcrumb"
      >
        УАМ
      </Link>
      {currentObject && breadcrumbsArrow}
      {currentObject && (
        <Link style={{ textDecoration: "none" }} className="breadcrumb">
          {currentObject.title}
        </Link>
      )}
    </div>
  );
};

export default Breadcrumbs;
