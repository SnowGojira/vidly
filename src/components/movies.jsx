import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { filterMovies } from "../utils/filter";
import ListGroup from "./common/listgroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    // currentGenre: "All genres",
  };
  componentDidMount() {
    const genres = [{ name: "All genres", _id: -1 }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    let {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
    } = this.state;
    let filtered =
      selectedGenre && selectedGenre._id !== -1
        ? filterMovies(allMovies, selectedGenre)
        : allMovies;
    let movies = paginate(filtered, currentPage, pageSize);
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
                  onHeartSelect={this.handleSelected}
                  onDeleteClick={this.handleDelete}
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
