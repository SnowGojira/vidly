import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>{`movie:${match.params.id}`}</h1>
        <button className="btn btn-danger btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
