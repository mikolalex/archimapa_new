import React, { useEffect, useState } from "react";
import "./Breadcrumbs.less";
import { Link, useLocation } from "react-router-dom";
import { mainUrl } from "../../module";

const Breadcrumbs = () => {
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

  const [items, setItems] = useState([]);
  const [object, setObject] = useState([]);
  // const [parent, setParent] = useState();

  async function getItemsInfo(id) {
    fetch(`${mainUrl}/items/${id}`)
      .then((response) => response.json())
      .then((json) => setItems((prev) => (prev = [...prev, json[0]])));
  }
  async function getObjectInfo() {
    fetch(`${mainUrl}/objects/${id}`)
      .then((response) => response.json())
      .then((json) => setObject(json));
  }

  // const par = () => {
  //   async function getParentInfo(id) {
  //     fetch(`${mainUrl}/items/${id}`)
  //       .then((response) => response.json())
  //       .then((json) => setParent(json[0]));
  //       // return parent
  //   }
  //   // console.log(parent[0].id)
  //   getParentInfo(5)
  //   return parent
  // };
  // par()
  // console.log(par());
  useEffect(() => {
    type === "item" ? getItemsInfo(id) : getObjectInfo();
  }, [location]);

  useEffect(() => {
    object.items
      ? object.items.forEach((item) => {
          getItemsInfo(item.id);
        })
      : null;
  }, [object]);

  return (
    <div className="breadcrumbs-list">
      {items[0] &&
        items.map((item) => (
          <ul className="breadcrumbs" key={item.id}>
            {breadcrumb("/", "Головна")}
            {breadcrumbsArrow}
            {/* {item.parent_id && breadcrumb(`/item/${par(item.parent_id)}`, "parent")} */}
            {item.parent_id &&  breadcrumb(`/item/${item.parent_id}`, "parent")}
            {item.parent_id && breadcrumbsArrow}
            {/* {getParentInfo(item.parent_id)} */}
            {breadcrumb(`/item/${item.id}`, item.title)}
            {object.id && breadcrumbsArrow}
            {breadcrumb(`/object/${object.id}`, object.title)}
          </ul>
        ))}
    </div>
  );
};

export default Breadcrumbs;
