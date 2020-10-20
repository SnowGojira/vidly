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
  let payload;
  if(movie._id === undefined){
    payload = changeMovie({},movie);
    const {data:post} = await http.post(config.moviesApiEnd,payload);
    return post;
  }else{
    payload = changeMovie(movie,movie);
    const {data:put} = await http.put(`${config.moviesApiEnd}/$${payload._id}`,payload);
    return put;
  }
  // let newMovie = movies.find((m) => m._id === movie._id) || {};
  // const newMovie = {};
  // newMovie.title = movie.title;
  // newMovie.genreId = movie.genreId;
  // newMovie.numberInStock = movie.numberInStock;
  // newMovie.dailyRentalRate = movie.dailyRentalRate;
  
  

  // return payload;
}

function changeMovie(obj,movie){
  const newMovie = obj;
  
  newMovie.title = movie.title;
  newMovie.genreId = movie.genreId;
  newMovie.numberInStock = movie.numberInStock;
  newMovie.dailyRentalRate = movie.dailyRentalRate;
  console.log(newMovie);
  return newMovie;
}

export const deleteMovie = async (id) => {
  await http.delete(`${config.moviesApiEnd}/${id}`);
}
