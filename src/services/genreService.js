import config from "./config.json";
import http from "./httpService";

export const gotGenres = async () => {
  const { data: genres } = await http.get(config.genresApiEnd);
  return genres;
};
