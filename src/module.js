import json from "./config.json";

export function getConfig(config) {
  return json[config];
}

export function isArrayEmpty(arr) {
  return arr.length > 0 ? false : true;
}

export const mainUrl = "https://map.transsearch.net";
export const adminkaUrl = "https://map.transsearch.net/admin";
