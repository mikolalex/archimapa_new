import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbItem = ({ path, text }) => {
  return (
    <li>
      <Link to={path} style={{ textDecoration: "none" }} className="breadcrumb">
        {text}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
