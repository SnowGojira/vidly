import React, { Component } from "react";
import Heart from "./common/heart";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  render() {
    const { movies, onHeart, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      { label: "Title", path: "title" },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      { key: "heart" },
      { key: "delete" },
    ];

    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td className="col-md-3 themed-grid-col">{movie.title}</td>
              <td className="col-md-2 themed-grid-col">{movie.genre.name}</td>
              <td className="col-md-2 themed-grid-col">
                {movie.numberInStock}
              </td>
              <td className="col-md-2 themed-grid-col">
                {movie.dailyRentalRate}
              </td>
              <td className="col-md-1">
                <Heart
                  movie={movie}
                  liked={movie.liked}
                  onSelected={() => onHeart(movie)}
                />
              </td>
              <td className="col-md-2 themed-grid-col">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
