import json from "./config.json";

export function getConfig(config) {
    return json[config];
  }

