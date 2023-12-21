import React from "react";
import { Link } from "react-router-dom";

const Item = ({ currentObject, item }) => {
  return (
    <>
      {currentObject.items && item && (
        <li>
          {item.title}
          {item.type === "text" ? (
            <span>{item.value}</span>
          ) : (
            <Link to={`/item/${item.value}`} style={{ textDecoration: "none" }}>
              {currentObject.items.map((itemObj) =>
                Number(itemObj.id) === Number(item.value) ? (
                  <span key={itemObj.id}> {itemObj.name} </span>
                ) : null
              )}
            </Link>
          )}
        </li>
      )}
    </>
  );
};

export default Item;
