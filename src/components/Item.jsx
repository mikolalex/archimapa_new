import React from "react";
import { Link } from "react-router-dom";

const Item = ({ currentObject, title, categoryId }) => {
    console.log(currentObject);
  return (
    <li>
      {title}
      {currentObject.categories &&
        currentObject.categories.map((item) =>
          item[0].category_id === categoryId ? (
            <Link
              to={`/item/${item[0].id}`}
              style={{ textDecoration: "none" }}
              key={item[0].id}
            >
              <span>{item[0].title}</span>
            </Link>
          ) : null
        )}
    </li>
  );
};

export default Item;
