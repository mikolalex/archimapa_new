import json from "./config.json";

export function getConfig(config) {
    return json[config];
  }

export const mainUrl = "https://map.transsearch.net"