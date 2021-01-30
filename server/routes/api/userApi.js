const express = require("express")
const axios = require("./axios")

const router = express.Router()

// get user with userId
router.get("/user/:id", async (req, res, next) => {
  // get userId width params
  const userId = parseInt(req.params.id)
  // get user width userId as api
  const user = await (await axios.get(`/users/${userId}`)).data
  // get user posts width userId as api
  const posts = await (await axios.get(`/users/${userId}/posts`)).data
  // get user albums width userId as api
  const albums = await (await axios.get(`/users/${userId}/albums`)).data
  // send response user
  res.json({ user, posts, albums })
})

//   ///////////////////////////

// get user posts width userId
router.get(`/user/:userId/posts`, async (req, res, next) => {
  // get userId as params
  const userId = parseInt(req.params.userId)
  // get all user posts width userId
  const posts = await (await axios.get(`/users/${userId}/posts`)).data
  // send response user posts
  res.json(posts)
})

///////////////////////////////////

// get user albums width userId
router.get(`/user/:userId/albums`, async (req, res, next) => {
  // get userId as params
  const userId = parseInt(req.params.userId)
  // get user albums as api
  const albums = await (await axios.get(`/users/${userId}/albums`)).data
  // send response user albums
  res.json(albums)
})

module.exports = router
