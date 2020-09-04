import _ from "lodash";

export function filterMovies(movies, genre) {
  return _.filter(movies, ["genre", genre]);
}
