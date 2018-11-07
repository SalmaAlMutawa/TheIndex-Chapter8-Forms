import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class AuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: [] //leave this empty
    };
  }
  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitAuthor(e) {
    e.preventDefault();
    this.props.onPostAuthor(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitAuthor.bind(this)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="first_name"
            onChange={this.onTextChange.bind(this)}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="last_name"
            onChange={this.onTextChange.bind(this)}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Image URL</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            onChange={this.onTextChange.bind(this)}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostAuthor: newAuthor => dispatch(actionCreators.postAuthor(newAuthor))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorForm);
