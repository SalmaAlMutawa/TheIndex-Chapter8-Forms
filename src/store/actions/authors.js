import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return dispatch => {
    instance
      .get("/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({ type: actionTypes.FETCH_AUTHORS, payload: authors })
      );
  };
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};

//POST THE AUTHOR TO https://the-index-api.herokuapp.com/api/authors/
export const postAuthor = newAuthor => {
  return dispatch => {
    instance
      .post("/api/authors/", newAuthor)
      .then(res => res.data)
      .then(author =>
        dispatch({ type: actionTypes.POST_AUTHOR, payload: author })
      )
      .catch(err =>
        dispatch({ type: actionTypes.POST_AUTHOR, payload: err.response.data })
      );
  };
};
