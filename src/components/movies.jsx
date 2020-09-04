import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { filterMovies } from "../utils/filter";
import ListGroup from "./common/listgroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ name: "All genres", _id: -1 }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  handleHeart = (movie) => {
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
  };
  render() {
    let {
      currentPage,
      pageSize,
      movies: allMovies,
      sortColumn,
      selectedGenre,
    } = this.state;
    let filtered =
      selectedGenre && selectedGenre._id !== -1
        ? filterMovies(allMovies, selectedGenre)
        : allMovies;
    let sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    console.log(this.state.sortColumn);
    let movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <ListGroup
              genres={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col-md-9">
            {this.state.movies.length !== 0 ? (
              <div>
                <div>showing {filtered.length} movies</div>
                <MoviesTable
                  movies={movies}
                  onHeart={this.handleHeart}
                  onDelete={this.handleDelete}
                  onSort={this.handleSort}
                />
              </div>
            ) : (
              <div>There is no movie</div>
            )}
            <Pagination
              total={filtered.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
