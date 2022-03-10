import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.history.push("/movies")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieForm;
