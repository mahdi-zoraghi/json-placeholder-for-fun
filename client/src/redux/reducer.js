import {
  LOAD_POSTS_ERROR,
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_USER_LOADING,
  LOAD_USER_SUCCESS,
  LOAD_POST_ERROR,
  LOAD_POST_LOADING,
  LOAD_POST_SUCCESS,
  LOAD_ALBUMS_ERROR,
  LOAD_ALBUMS_LOADING,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUM_ERROR,
  LOAD_ALBUM_LOADING,
  LOAD_ALBUM_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_LOADING,
  EDIT_PROFILE_SUCCESS,
  LOAD_USER_POSTS_ERROR,
  LOAD_USER_POSTS_LOADING,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_ALBUMS_ERROR,
  LOAD_USER_ALBUMS_LOADING,
  LOAD_USER_ALBUMS_SUCCESS,
} from "./actions/types"

const initialState = {
  loading: false,
  error: false,
  posts: [],
  user: {},
  userProfile: {},
  userPosts: [],
  userAlbums: [],
  post: {},
  albums: [],
  album: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_LOADING:
    case LOAD_USER_LOADING:
    case LOAD_POST_LOADING:
    case LOAD_ALBUMS_LOADING:
    case LOAD_ALBUM_LOADING:
    case SIGNIN_LOADING:
    case EDIT_PROFILE_LOADING:
    case LOAD_USER_POSTS_LOADING:
    case LOAD_USER_ALBUMS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_POSTS_ERROR:
    case LOAD_USER_ERROR:
    case LOAD_POST_ERROR:
    case LOAD_ALBUMS_ERROR:
    case LOAD_ALBUM_ERROR:
    case SIGNIN_ERROR:
    case EDIT_PROFILE_ERROR:
    case LOAD_USER_POSTS_ERROR:
    case LOAD_USER_ALBUMS_ERROR:
      console.log("error ...")
      return {
        ...state,
        loading: false,
        error: true,
      }
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      }
    case LOAD_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
      }
    case LOAD_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        album: action.payload,
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
      }
    case EDIT_PROFILE_SUCCESS:
      console.log("new user : ", action.payload)
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
      }
    case LOAD_USER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        userPosts: action.payload,
      }
    case LOAD_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        userAlbums: action.payload,
      }
    default:
      return state
  }
}

export default reducer
