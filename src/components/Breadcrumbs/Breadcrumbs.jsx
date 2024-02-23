import React, { useEffect, useState } from "react";
import "./Breadcrumbs.less";
import { useLocation } from "react-router-dom";
import BreadcrumbsArrow from "./BreadcrumbsArrow";
import BreadcrumbItem from "./BreadcrumbItem";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

const Breadcrumbs = ({ currentObject }) => {
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const [items, getItems, setItems] = useBreadcrumbs();

  useEffect(() => {
    setItems({});
    currentObject
      ? currentObject.items
        ? currentObject.items.forEach((item) => {
            getItems(item.id, item.id);
          })
        : null
      : getItems(id, id);
  }, [location, currentObject]);

  return (
    <div className="breadcrumbs-list">
      {Object.keys(items).map((key) => (
        <ul className="breadcrumbs" key={key}>
          <BreadcrumbItem path="/" text="Головна" />
          <BreadcrumbsArrow />
          {items[key].reverse().map((item) => {
            return (
              <div className="breadcrumb-item" key={item.id}>
                <BreadcrumbItem path={`/item/${item.id}`} text={item.title} />
                {items[key].indexOf(item) < items[key].length - 1 && (
                  <BreadcrumbsArrow />
                )}
              </div>
            );
          })}
          {currentObject && (
            <>
              <BreadcrumbsArrow />
              <BreadcrumbItem
                path={`/object/${currentObject.id}`}
                text={currentObject.title}
              />
            </>
          )}
        </ul>
      ))}
    </div>
  );
};

export default Breadcrumbs;
