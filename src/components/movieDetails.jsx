import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {};
  render() {
    return (
      <div>
        <h1>{`movie:`}</h1>
        <button className="btn btn-danger btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
