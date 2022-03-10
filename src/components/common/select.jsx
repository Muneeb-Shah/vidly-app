import React, { Component } from "react";

class Select extends Component {
  render() {
    const { name, label, onChange, options } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          className="form-control required"
          name={name}
          id={name}
          onChange={onChange}
          required
        >
          <option></option>
          {options.map((option) => (
            <option key={option._id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
