import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);

    if (!result.error) return null;

    const error = {};
    result.error.details.map((item) => (error[item.path[0]] = item.message));

    return error;
  };

  validateProperty = (e) => {
    const obj = { [e.target.name]: e.target.value };

    const schema = {
      [e.currentTarget.name]: this.schema[e.currentTarget.name],
    };

    const result = Joi.validate(obj, schema);

    return result.error ? result.error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || {} });

    this.doSubmit();
  };

  handleChange = (e) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(e);

    if (errorMessage) error[e.currentTarget.name] = errorMessage;
    else delete error[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, error });
  };

  renderInput = (name, label, type = "text") => {
    return (
      <Input
        name={name}
        value={this.state.data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={this.state.error[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary"
        type="submit"
      >
        {label}
      </button>
    );
  };
}

export default Form;
