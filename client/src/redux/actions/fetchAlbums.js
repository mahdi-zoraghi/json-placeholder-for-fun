import axios from "axios"

import {
  LOAD_ALBUMS_ERROR,
  LOAD_ALBUMS_LOADING,
  LOAD_ALBUMS_SUCCESS,
} from "./types"

const loadAlbumsError = () => ({ type: LOAD_ALBUMS_ERROR })
const loadAlbumsLoading = () => ({ type: LOAD_ALBUMS_LOADING })
const loadAlbumsSuccess = data => ({
  type: LOAD_ALBUMS_SUCCESS,
  payload: data,
})

const fetchAlbums = page => {
  return dispatch => {
    dispatch(loadAlbumsLoading())
    axios
      .get(`/api/albums?page=${page}`)
      .then(({ data }) => {
        dispatch(loadAlbumsSuccess(data))
      })
      .catch(err => dispatch(loadAlbumsError()))
  }
}

export default fetchAlbums
