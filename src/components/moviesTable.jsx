import React, { Component } from "react";
import Heart from "./common/heart";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  render() {
    const { movies, onHeart, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      {
        label: "Title",
        path: "title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      {
        key: "heart",
        content: (movie) => (
          <Heart
            movie={movie}
            liked={movie.liked}
            onSelected={() => onHeart(movie)}
          />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(movie)}
          >
            delete
          </button>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        movies={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
