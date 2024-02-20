import React, { useEffect, useState } from "react";
import "./Breadcrumbs.less";
import { useLocation } from "react-router-dom";
import { mainUrl } from "../../module";
import BreadcrumbsArrow from "./BreadcrumbsArrow";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumbs = ({ currentObject }) => {
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
            {<BreadcrumbItem path="/" text="Головна" />}
            {<BreadcrumbsArrow />}
            {item.parent_id && (
              <BreadcrumbItem
                path={`/item/${item.parent_id}`}
                text={getParentName(item[parent_id])}
              />
            )}
            {item.parent_id && <BreadcrumbsArrow />}
            <BreadcrumbItem path={`/item/${item.id}`} text={item.title} />
            {currentObject && <BreadcrumbsArrow />}
            {currentObject && (
              <BreadcrumbItem
                path={`/object/${currentObject.id}`}
                text={currentObject.title}
              />
            )}
          </ul>
        ))}
    </div>
  );
};

export default Breadcrumbs;
