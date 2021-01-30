const express = require("express")
const axios = require("./axios")

const router = express.Router()

// get all posts With pagination -  pages
router.get("/posts", async (req, res, next) => {
  // get all users as api
  const users = await (await axios.get("/users")).data
  // get all posts as api
  const posts = await (await axios.get("/posts")).data
  // get page number width query params
  const pageNumber = parseInt(req.query.page)
  const response = []

  // push all posts to [ const response ] => []
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    // find user creator post width userId
    const user = await users.filter(user => user.id === post.userId)[0]
    response.push({
      userId: user.id,
      name: user.name,
      email: user.email,
      id: post.id,
      title: post.title,
      body: post.body,
    })
  }

  const page = []
  // get max page number
  const maxIndex = pageNumber * 10
  // get min page number
  const minIndex = maxIndex === 10 ? 0 : maxIndex - 10
  // push albums page to [ const album ] -> []
  for (let i = minIndex; i < maxIndex; i++) {
    page.push(response[i])
  }
  // generate count Pages
  const countPage = Math.round(response.length / 10)
  // send response posts page
  res.json({ countPage, page, pageNumber })
})

//   ///////////////////////

// get post with postId
router.get("/post/:id", async (req, res, next) => {
  // get post id width params
  const postId = parseInt(req.params.id)
  // get post width postId
  const post = await (await axios.get(`/posts/${postId}`)).data
  // get comments post width postId
  const comments = await (await axios.get(`/posts/${postId}/comments`)).data
  const userId = post.userId
  // get user creator post width userId
  const user = await (await axios.get(`/users/${userId}`)).data

  // send response post
  res.json({
    user: { id: user.id, name: user.name, email: user.email },
    post,
    comments,
  })
})

module.exports = router
