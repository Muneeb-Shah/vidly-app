import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <input
        name="query"
        className="form-control"
        onChange={(e) => onChange(e.currentTarget.value)}
        type="text"
        placeholder="Search..."
      />
    );
  }
}

export default SearchBox;
