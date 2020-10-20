import {moviesApiEnd} from "../config.json";
import http from "./httpService";

export const getMovies = () => {
  return http.get(moviesApiEnd);
};

export const getMovie = async (id) => {
  return http.get(`${moviesApiEnd}/${id}`);
};

export async function saveMovie(movie) {
  const payload = changeMovie(movie);
  if(movie._id === undefined){
    await http.post(moviesApiEnd,payload);
  }else{
    await http.put(`${moviesApiEnd}/${movie._id}`,payload);
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

export const deleteMovie = (id) => {
  return http.delete(`${moviesApiEnd}/${id}`);
}
