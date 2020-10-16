import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { filterMovies } from "../utils/filter";
import { Link } from "react-router-dom";
import ListGroup from "./common/listGroup";
import _ from "lodash";

import { getGenres } from "../services/genreService";

// import config from "../services/config.json";
// import http from "../services/httpService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const genres = [{ name: "All genres", _id: -1 }, ...(await getGenres())];

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
    // this.handleInputChange(null);
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleInputChange = ({ currentTarget: input }) => {
    this.setState({
      searchQuery: input.value,
      selectedGenre: null,
      currentTarget: 1,
    });
  };
  getPageData = () => {
    let {
      currentPage,
      pageSize,
      movies: allMovies,
      sortColumn,
      searchQuery,
      selectedGenre,
    } = this.state;

    console.log(searchQuery);
    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((o) =>
        o.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id !== -1) {
      filtered = filterMovies(allMovies, selectedGenre);
    }

    let sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    let movies = paginate(sorted, currentPage, pageSize);

    return { movies, filtered };
  };
  render() {
    let { sortColumn } = this.state;
    const { movies, filtered } = this.getPageData();

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
                <Link to="/movies/new">
                  <button className="btn btn-primary mb-2">New Movie</button>
                </Link>
                <div className="mb-2">showing {filtered.length} movies</div>
                <input
                  value={this.state.searchQuery}
                  type="text"
                  onChange={this.handleInputChange}
                  className="form-control"
                />
                <MoviesTable
                  movies={movies}
                  onHeart={this.handleHeart}
                  onDelete={this.handleDelete}
                  onSort={this.handleSort}
                  sortColumn={sortColumn}
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
