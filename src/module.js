import json from "./config.json";

export function getConfig(config) {
  return json[config];
}

export function isArrayEmpty(arr) {
  return arr.length > 0 ? false : true;
}

export function getFiltersURL(obj, bounds) {
  let filtersString = "";

  for (let key in obj) {
    Array.isArray(obj[key])
      ? isArrayEmpty(obj[key])
        ? null
        : (filtersString += `${key}=${obj[key]}&`)
      : (filtersString += `${key}=${obj[key]}&`);
  }

  const fullUrl = `${mainUrl}/objects?north=${bounds.north}&south=${
    bounds.south
  }&east=${bounds.east}&west=${bounds.west}${filtersString.slice(0, -1)}`;
  return fullUrl;
}

export const mainUrl = "https://map.transsearch.net";
export const adminkaUrl = "https://map.transsearch.net/admin";
