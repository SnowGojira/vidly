import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  movieSection(movie) {
    // console.log(movie);
    return (
      <tr key={movie._id}>
        <td className="col-md-4 themed-grid-col">{movie.title}</td>
        <td className="col-md-2 themed-grid-col">{movie.genre.name}</td>
        <td className="col-md-2 themed-grid-col">{movie.numberInStock}</td>
        <td className="col-md-2 themed-grid-col">{movie.dailyRentalRate}</td>
        <td className="col-md-2 themed-grid-col">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(movie)}
          >
            delete
          </button>
        </td>
      </tr>
    );
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  getSpan() {
    if (this.state.movies.length !== 0)
      return (
        <div>
          <div>showing {this.state.movies.length} movies</div>
          <table className="table">
            <thead style={{ fontWeight: "bold" }}>
              <tr>
                <th className="col-md-4">Title</th>
                <th className="col-md-2">Genre</th>
                <th className="col-md-2">Stock</th>
                <th className="col-md-2">Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => this.movieSection(movie))}
            </tbody>
          </table>
        </div>
      );

    return <div>There is no movie</div>;
  }
  render() {
    return <React.Fragment>{this.getSpan()}</React.Fragment>;
  }
}

export default Movies;
