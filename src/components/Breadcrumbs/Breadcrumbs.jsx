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

  const breadcrumb = (path, text) => (
    <li>
      <Link to={path} style={{ textDecoration: "none" }} className="breadcrumb">
        {text}
      </Link>
    </li>
  );

  let location = useLocation();
  let id = location.pathname.split("/")[2];
  let type = location.pathname.split("/")[1];
  console.log(id, type);

  // const [parent, setParent] = useState([]);
  const [item, setItem] = useState([]);
  const [object, setObject] = useState([]);
  console.log(item);
  console.log(object.items);

  // async function getParent() {
  //   fetch(`${mainUrl}/items/${item[0].parent_id}`)
  //     .then((response) => response.json())
  //     .then((json) => setParent(json));
  // }
  async function getItemInfo() {
    fetch(`${mainUrl}/items/${id}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }
  async function getObjectInfo() {
    fetch(`${mainUrl}/objects/${id}`)
      .then((response) => response.json())
      .then((json) => setObject(json));
  }
  useEffect(() => {
    type === "item" ? getItemInfo() : getObjectInfo();
    // setParent([]);
  }, [location]);
  // useEffect(() => {
  //   getParent();
  // }, [item]);

  return (
    <>
      {type === "item"
        ? item[0] && (
            <ul className="breadcrumbs">
              {breadcrumb("/", "Головна")}
              {breadcrumbsArrow}
              {breadcrumb(`/item/${item[0].id}`, item[0].title)}
            </ul>
          )
        : object.items && (
            <ul className="breadcrumbs">
              {breadcrumb("/", "Головна")}
              {breadcrumbsArrow}
              {breadcrumb(`/item/${object.items[0].id}`, object.items[0].name)}
            </ul>
          )}

      {/* {((currentObject && currentObject.items) || item[0]) && (
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
      )} */}
    </>
  );
};

export default Breadcrumbs;
