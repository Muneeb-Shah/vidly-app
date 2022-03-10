import React, { Component } from "react";
import PropTypes from "prop-types";

class ListGroup extends Component {
  render() {
    const {
      textProperty,
      valueProperty,
      items,
      movies,
      selectedItem,
      onItemSelect,
    } = this.props;

    return (
      <ul className="list-group">
        {/* <li className="list-group-item" onClick={onGenreClick}>
          All Genres
        </li> */}
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
