import axios from "axios"

import {
  LOAD_USER_POSTS_ERROR,
  LOAD_USER_POSTS_LOADING,
  LOAD_USER_POSTS_SUCCESS,
} from "./types"

const loadUserPostsError = () => ({ type: LOAD_USER_POSTS_ERROR })
const loadUserPostsLoading = () => ({ type: LOAD_USER_POSTS_LOADING })
const loadUserPostsSuccess = data => ({
  type: LOAD_USER_POSTS_SUCCESS,
  payload: data,
})

const fetchUserPosts = userId => dispatch => {
  dispatch(loadUserPostsLoading())
  axios
    .get(`/api/user/${userId}/posts`)
    .then(({ data }) => dispatch(loadUserPostsSuccess(data)))
    .catch(err => dispatch(loadUserPostsError()))
}

export default fetchUserPosts
