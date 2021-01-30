import axios from "axios"

import { LOAD_USER_ERROR, LOAD_USER_LOADING, LOAD_USER_SUCCESS } from "./types"

const loadUserError = () => ({ type: LOAD_USER_ERROR })
const loadUserLoading = () => ({ type: LOAD_USER_LOADING })
const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
})

const fetchUser = userId => {
  return dispatch => {
    dispatch(loadUserLoading())
    axios
      .get(`/api/user/${userId}`)
      .then(({ data }) => dispatch(loadUserSuccess(data)))
      .catch(err => dispatch(loadUserError()))
  }
}

export default fetchUser
