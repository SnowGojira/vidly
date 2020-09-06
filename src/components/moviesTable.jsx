import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

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
        <TableBody movies={movies} onHeart={onHeart} onDelete={onDelete} />
      </table>
    );
  }
}

export default MoviesTable;
