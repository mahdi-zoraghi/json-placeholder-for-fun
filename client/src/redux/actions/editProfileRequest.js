import axios from "axios"

import {
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_LOADING,
  EDIT_PROFILE_SUCCESS,
} from "./types"

const editProfileError = () => ({ type: EDIT_PROFILE_ERROR })
const editProfileLoading = () => ({ type: EDIT_PROFILE_LOADING })
const editProfileSuccess = data => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: data,
})

const editProfileRequest = user => {
  return dispatch => {
    dispatch(editProfileLoading())
    axios
      .put("/api/edit-profile", user)
      .then(({ data }) => dispatch(editProfileSuccess(data)))
      .catch(err => dispatch(editProfileError()))
  }
}

export default editProfileRequest
