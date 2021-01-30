import axios from "axios"

import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS } from "./types"

const signInError = () => ({ type: SIGNIN_ERROR })
const signInLoading = () => ({ type: SIGNIN_LOADING })
const signInSuccess = data => ({
  type: SIGNIN_SUCCESS,
  payload: data,
})

const signIn = (username, email, signinSuccess, signinUserNotFound) => {
  console.log("action signin ", username, email)
  return dispatch => {
    dispatch(signInLoading())
    axios
      .post("/api/signin", { username, email })
      .then(({ data }) => {
        if (data.id) {
          dispatch(signInSuccess(data))
          signinSuccess()
        } else {
          signinUserNotFound()
          throw new Error("user not fond")
        }
      })
      .catch(err => dispatch(signInError()))
  }
}

export default signIn
