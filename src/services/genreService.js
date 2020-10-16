import config from "./config.json";
import http from "./httpService";

export const getGenres = async () => {
  const { data: genres } = await http.get(config.genresApiEnd);
  return genres;
};

// export const genres = [
//   { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//   { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//   { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
// ];

// export function getGenres() {
//   return genres.filter((g) => g);
// }
