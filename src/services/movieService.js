import {moviesApiEnd} from "../config.json";
import http from "./httpService";

export const getMovies = () => {
  return http.get(moviesApiEnd);
};

export const getMovie = async (id) => {
  return http.get(`${moviesApiEnd}/${id}`);
};

export function saveMovie(movie) {
  const payload = {...movie};
  if(movie._id === undefined){
    return http.post(moviesApiEnd,payload);
  }else{
    delete payload._id;
    return http.put(`${moviesApiEnd}/${movie._id}`,payload);
  }
}

export const deleteMovie = (id) => {
  return http.delete(`${moviesApiEnd}/${id}`);
}
