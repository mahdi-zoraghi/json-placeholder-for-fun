import axios from "axios"

import {
  LOAD_POSTS_ERROR,
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
} from "./types"

const loadPostsError = () => ({ type: LOAD_POSTS_ERROR })
const loadPostsLoading = () => ({ type: LOAD_POSTS_LOADING })
const loadPostsSuccess = data => ({
  type: LOAD_POSTS_SUCCESS,
  payload: data,
})

const fetchPosts = page => {
  return dispatch => {
    dispatch(loadPostsLoading())
    axios
      .get(`/api/posts?page=${page}`)
      .then(({ data }) => {
        dispatch(loadPostsSuccess(data))
      })
      .catch(err => dispatch(loadPostsError()))
  }
}

export default fetchPosts
