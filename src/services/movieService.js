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

export async function saveMovie(movie) {
  const payload = changeMovie(movie);
  if(movie._id === undefined){
    await http.post(config.moviesApiEnd,payload);
  }else{
    await http.put(`${config.moviesApiEnd}/${movie._id}`,payload);
  }
}

function changeMovie(movie){
  const newMovie = {};
  
  newMovie.title = movie.title;
  newMovie.genreId = movie.genreId;
  newMovie.numberInStock = movie.numberInStock;
  newMovie.dailyRentalRate = movie.dailyRentalRate;
  return newMovie;
}

export const deleteMovie = async (id) => {
  await http.delete(`${config.moviesApiEnd}/${id}`);
}
