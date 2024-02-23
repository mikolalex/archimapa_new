import { useState } from "react";
import { mainUrl } from "../module";

function useBreadcrumbs() {
  const [items, setItems] = useState({});

  const getItems = (id, key) => {
    fetch(`${mainUrl}/items/${id}`)
      .then((response) => response.json())
      .then(
        (json) => (
          setItems(
            (prev) =>
              (prev = {
                ...prev,
                [key]: prev[key] ? [...prev[key], json[0]] : [json[0]],
              })
          ),
          json[0].parent_id ? getItems(json[0].parent_id, id) : null
        )
      );
  };

  return [items, getItems, setItems];
}

export default useBreadcrumbs;
