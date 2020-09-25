import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieDetails extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: "",
    },
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().integer().min(0).max(100).required().label("Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };
  doSubmit = () => {
    this.props.history.push("/movies");
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>{`movie:${match.params.id}`}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("stock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
