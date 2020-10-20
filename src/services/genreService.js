import {genresApiEnd} from "../config.json";
import http from "./httpService";

export const getGenres = () => {
  return http.get(genresApiEnd);
};
