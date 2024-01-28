import { urlApi } from "./api";

export const img = (path: string) => {
  return `${urlApi}/${path}`;
};
