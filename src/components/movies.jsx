import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Heart from "./heart";
import Pagination from "./pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  movieSection(movie) {
    // console.log(movie);
    return (
      <tr key={movie._id}>
        <td className="col-md-3 themed-grid-col">{movie.title}</td>
        <td className="col-md-2 themed-grid-col">{movie.genre.name}</td>
        <td className="col-md-2 themed-grid-col">{movie.numberInStock}</td>
        <td className="col-md-2 themed-grid-col">{movie.dailyRentalRate}</td>
        <td className="col-md-1">
          <Heart
            movie={movie}
            liked={movie.liked}
            onSelected={this.handleSelected}
          />
        </td>
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
  handleSelected = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    let m = { ...movie };

    m.liked = !m.liked;
    movies[index] = m;
    this.setState({ movies });
  };
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
                <th className="col-md-1"></th>
                <th className="col-md-2"></th>
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
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    //处理数据的分流
    let movies = [...this.state.movies];
    let size = this.state.pageSize;
    let length = movies.length;
    let newMovies;
    let start = (page - 1) * size;
    let end;
    if (page * size <= length) {
      end = page * size;
    } else {
      end = length;
    }
    newMovies = movies.slice(start, end);

    console.log(`start:${start},end:${end}`);
  };
  render() {
    return (
      <React.Fragment>
        {this.getSpan()}
        <Pagination
          total={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
