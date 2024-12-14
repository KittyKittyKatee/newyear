import type { ResultType } from "./types";

export function getRes(res: ResultType) {
  return Object.entries(res).sort((a, b) =>  b[1] - a[1])[0][0];
}

