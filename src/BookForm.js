import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      color: ""
    };
  }
  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitBook(e) {
    e.preventDefault();
    this.props.postBook(this.state, this.props.authorID);
  }

  render() {
    return (
      <form onSubmit={this.submitBook.bind(this)}>
        <input
          type="text"
          name="title"
          placeholder="Book Name"
          onChange={this.onTextChange.bind(this)}
        />
        <select name="color" onChange={this.onTextChange.bind(this)}>
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="purple">Purple</option>
        </select>
        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    author: state.rootAuthor.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, authorID) =>
      dispatch(actionCreators.postBook(book, authorID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
