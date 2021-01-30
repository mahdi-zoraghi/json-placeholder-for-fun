import axios from "axios"

import {
  LOAD_USER_ALBUMS_ERROR,
  LOAD_USER_ALBUMS_LOADING,
  LOAD_USER_ALBUMS_SUCCESS,
} from "./types"

const loadUserAlbumsError = () => ({ type: LOAD_USER_ALBUMS_ERROR })
const loadUserAlbumsLoading = () => ({ type: LOAD_USER_ALBUMS_LOADING })
const loadUserAlbumsSuccess = data => ({
  type: LOAD_USER_ALBUMS_SUCCESS,
  payload: data,
})

const fetchUserAlbums = userId => dispatch => {
  dispatch(loadUserAlbumsLoading())
  axios
    .get(`/api/user/${userId}/albums`)
    .then(({ data }) => dispatch(loadUserAlbumsSuccess(data)))
    .catch(err => dispatch(loadUserAlbumsError()))
}

export default fetchUserAlbums
