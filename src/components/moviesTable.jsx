import React, { Component } from "react";
import Heart from "./common/heart";

const MoviesTable = (props) => {
  const { movies, onHeartSelect, onDeleteClick } = props;
  return (
    <table className="table">
      <thead style={{ fontWeight: "bold" }}>
        <tr>
          <th className="col-md-4">Title</th>
          <th className="col-md-2">Genre</th>
          <th className="col-md-2">Stock</th>
          <th className="col-md-2">Rate</th>
          <th className="col-md-1"></th>
          <th className="col-md-2"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td className="col-md-3 themed-grid-col">{movie.title}</td>
            <td className="col-md-2 themed-grid-col">{movie.genre.name}</td>
            <td className="col-md-2 themed-grid-col">{movie.numberInStock}</td>
            <td className="col-md-2 themed-grid-col">
              {movie.dailyRentalRate}
            </td>
            <td className="col-md-1">
              <Heart
                movie={movie}
                liked={movie.liked}
                onSelected={() => onHeartSelect(movie)}
              />
            </td>
            <td className="col-md-2 themed-grid-col">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteClick(movie)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
