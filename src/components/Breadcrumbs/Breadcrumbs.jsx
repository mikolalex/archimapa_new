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

  const [items, setItems] = useState([]);
  const [parentName, setParentName] = useState();

  async function getItemsInfo(id) {
    fetch(`${mainUrl}/items/${id}`)
      .then((response) => response.json())
      .then((json) => setItems((prev) => (prev = [...prev, json[0]])));
  }

  const getParentName = (id) => {
    async function getData() {
      fetch(`${mainUrl}/items/${id}`)
        .then((response) => response.json())
        .then((json) => setParentName(json[0].title));
    }
    getData();
    return parentName;
  };

  useEffect(() => {
    setItems([]);
    currentObject
      ? currentObject.items
        ? currentObject.items.forEach((item) => {
            getItemsInfo(item.id);
          })
        : null
      : getItemsInfo(id);
  }, [location, currentObject]);

  return (
    <div className="breadcrumbs-list">
      {items[0] &&
        items.map((item) => (
          <ul className="breadcrumbs" key={item.id}>
            {breadcrumb("/", "Головна")}
            {breadcrumbsArrow}
            {item.parent_id &&
              breadcrumb(
                `/item/${item.parent_id}`,
                `${getParentName(item.parent_id)}`
              )}
            {item.parent_id && breadcrumbsArrow}
            {breadcrumb(`/item/${item.id}`, item.title)}
            {currentObject && breadcrumbsArrow}
            {currentObject &&
              breadcrumb(`/object/${currentObject.id}`, currentObject.title)}
          </ul>
        ))}
    </div>
  );
};

export default Breadcrumbs;
