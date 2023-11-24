import React, { useState, useEffect } from "react";
import "./Pagination.less";

const Pagination = ({ objects, setObjectsToDisplay }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesQty, setPagesQty] = useState([]);
  const [displayedSlice, setDisplayedSlice] = useState([0, 20]);
  const displayedObjectsQty = 20;

  useEffect(() => {
    const end = currentPage * displayedObjectsQty;
    const start = end - displayedObjectsQty;
    setDisplayedSlice([start, end]);
  }, [objects, currentPage]);

  useEffect(() => {
    const pages = Math.ceil((objects.length - 1) / displayedObjectsQty);
    for (let i = 1; i <= pages; i++) {
      setPagesQty((prev) => [...prev, i]);
    }
  }, [objects]);

  useEffect(() => {
    setObjectsToDisplay(objects.slice(displayedSlice[0], displayedSlice[1]));
    console.log(currentPage);
  }, [displayedSlice]);

  return (
    <ul className="pagination">
      {pagesQty.map((page) =>
        page === 1 ||
        page === pagesQty.length ||
        page === currentPage ||
        page === currentPage + 1 ||
        page === currentPage - 1 ? (
          <li
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page ? "page-number active" : "page-number"
            }
          >
            {page}
          </li>
        ) : (
          <li className="page-number" key={"..."}>
            ...
          </li>
        )
      )}
    </ul>
  );
};

export default Pagination;
