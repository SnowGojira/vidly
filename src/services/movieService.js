import config from "./config.json";
import http from "./httpService";

export const gotMovies = async () => {
  const { data: movies } = await http.get(config.moviesApiEnd);
  return movies;
};

export const gotMovie = async (id) => {
  const { data: movie } = await http.get(`${config.moviesApiEnd}/${id}`);
  return movie;
};

export async function postMovie(movie) {
  // let newMovie = movies.find((m) => m._id === movie._id) || {};
  const newMovie = {};
  newMovie.title = movie.title;
  newMovie.genreId = movie.genreId;
  newMovie.numberInStock = movie.numberInStock;
  newMovie.dailyRentalRate = movie.dailyRentalRate;
  
  const{data:payload} = await http.post(config.moviesApiEnd,newMovie);

  return payload;
}

export const deleteMovie = async (id) => {
  await http.delete(`${config.moviesApiEnd}/${id}`);
}
