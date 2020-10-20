import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
// import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";

import { getGenres } from "../services/genreService";
import { gotMovie,saveMovie } from "../services/movieService";

class MovieDetails extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  async componentDidMount() {
    // const genres = [...getGenres()];
    const {data} = await getGenres();
    const genres = [...data];
    this.setState({ genres });
    //点击new按钮的跳转
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    
    //直接点击元素跳转的链接
    // const movie = getMovie(movieId);
    const movie = await gotMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    //在这一步完成post
    try{
      //saveMovie(this.state.data);
      await saveMovie(this.state.data);
      this.props.history.push("/movies");
      
    }catch(err){
      console.log("something happened:"+err);
    }
    
    
  };

  render() {
    return (
      <div>
        <h1>{`Movie Form`}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelector("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
