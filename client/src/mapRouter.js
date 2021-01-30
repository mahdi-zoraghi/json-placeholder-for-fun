import {
  Home,
  Post,
  UserProfile,
  SignIn,
  Albums,
  Album,
  Dashboard,
  EditProfile,
  UserPosts,
  UserAlbums,
} from "./components"

const mapRouter = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/user/:id",
    component: UserProfile,
    exact: true,
  },
  {
    path: "/post/:id",
    component: Post,
    exact: true,
  },
  {
    path: "/signin",
    component: SignIn,
    exact: true,
  },
  {
    path: "/albums",
    component: Albums,
    exact: true,
  },
  {
    path: "/album/:id",
    component: Album,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/edit-profile",
    component: EditProfile,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/posts",
    component: UserPosts,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/albums",
    component: UserAlbums,
    exact: true,
    isPrivate: true,
  },
]

export default mapRouter
