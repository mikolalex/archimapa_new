import json from "./config.json";

export function getConfig(config) {
  return json[config];
}

export function isArrayEmpty(arr) {
  return arr.length > 0 ? false : true;
}

export const mainUrl = "https://map.transsearch.net";

export const boundsUrl = (bounds) =>
  `${mainUrl}/objects?north=${bounds.north}&south=${bounds.south}&east=${bounds.east}&west=${bounds.west}`;

export const adminkaUrl = "https://map.transsearch.net/admin";

export const defaultBounds = {
  east: 39.46289062500001,
  north: 52.89564866211353,
  south: 44.98034238084973,
  west: 23.4228515625,
};

export async function getObjects(obj, bounds, func) {
  function getFiltersURL() {
    let filtersString = "";

    for (let key in obj) {
      Array.isArray(obj[key])
        ? isArrayEmpty(obj[key])
          ? null
          : (filtersString += `${key}=${obj[key]}&`)
        : obj[key]
        ? (filtersString += `${key}=${obj[key]}&`)
        : null;
    }

    const fullUrl =
      filtersString && `${boundsUrl(bounds)}&${filtersString.slice(0, -1)}`;

    return fullUrl;
  }

  fetch(getFiltersURL() ? getFiltersURL() : boundsUrl(bounds))
    .then((response) => response.json())
    .then((json) => {
      func(json);
    });
}
