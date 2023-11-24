import React from "react";
import "./ObjectsList.less";
import { Link } from "react-router-dom";

const ObjectsList = ({ list }) => {
  return (
    <ul className="objects-list">
      {list.map((object) => (
        <li className="object-item" key={object.id}>
          <div>
            <img
              src="/img/example_img.png"
              alt=""
              className="object-item-img"
            />
            <Link
              to={`/object/${object.id}`}
              style={{ textDecoration: "none" }}
            >
              <h3 className="object-item-title">{object.title}</h3>
            </Link>
            <p className="object-item-description">{object.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ObjectsList;
