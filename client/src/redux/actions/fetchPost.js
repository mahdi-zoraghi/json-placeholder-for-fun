import axios from "axios"

import { LOAD_POST_ERROR, LOAD_POST_LOADING, LOAD_POST_SUCCESS } from "./types"

const loadPostError = () => ({ type: LOAD_POST_ERROR })
const loadPostLoading = () => ({ type: LOAD_POST_LOADING })
const loadPostSuccess = data => ({
  type: LOAD_POST_SUCCESS,
  payload: data,
})

const fetchPost = postId => {
  return dispatch => {
    dispatch(loadPostLoading())
    axios
      .get(`/api/post/${postId}`)
      .then(({ data }) => dispatch(loadPostSuccess(data)))
      .catch(err => dispatch(loadPostError()))
  }
}

export default fetchPost
