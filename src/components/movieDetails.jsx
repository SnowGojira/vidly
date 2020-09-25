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
    title: Joi.string().trim().required().label("Title"),
    genre: Joi.string().trim().required().label("Genre"),
    stock: Joi.string().trim().required().label("Stock"),
    rate: Joi.string().trim().required().label("Rate"),
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
