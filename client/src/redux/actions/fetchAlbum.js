import axios from "axios"

import {
  LOAD_ALBUM_ERROR,
  LOAD_ALBUM_LOADING,
  LOAD_ALBUM_SUCCESS,
} from "./types"

const loadAlbumError = () => ({ type: LOAD_ALBUM_ERROR })
const loadAlbumLoading = () => ({ type: LOAD_ALBUM_LOADING })
const loadAlbumSuccess = data => ({
  type: LOAD_ALBUM_SUCCESS,
  payload: data,
})

const fetchAlbum = albumId => dispatch => {
  dispatch(loadAlbumLoading())
  axios
    .get(`/api/album/${albumId}`)
    .then(({ data }) => dispatch(loadAlbumSuccess(data)))
    .catch(err => dispatch(loadAlbumError()))
}

export default fetchAlbum
