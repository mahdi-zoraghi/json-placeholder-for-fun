const express = require("express")
const axios = require("./axios")

const router = express()

// get all Albums With pagination -  pages
router.get("/albums", async (req, res, next) => {
  // get all users as api
  const users = await (await axios.get("/users")).data
  // get all albums as api
  const albums = await (await axios.get("/albums")).data
  // get page number width query params
  const pageNumber = parseInt(req.query.page)
  const response = []

  // push all albums to [ const response ] => []
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i]
    const userId = album.userId
    // find user creator at album
    const user = users.filter(user => user.id === userId)[0]

    response.push({
      userId: user.id,
      name: user.name,
      email: user.email,
      id: album.id,
      title: album.title,
    })
  }

  const album = []
  // get max page number
  const maxIndex = pageNumber * 10
  // get min page number
  const minIndex = maxIndex === 10 ? 0 : maxIndex - 10
  // push albums page to [ const album ] -> []
  for (let i = minIndex; i < maxIndex; i++) {
    album.push(response[i])
  }
  // generate count Pages
  const countPage = Math.round(response.length / 10)
  // send response albums page
  res.json({ countPage, album, pageNumber })
})

//   //////////////////////////////////////////////////

// get album with albumId
router.get("/album/:id", async (req, res, next) => {
  // get album id width params
  const albumId = parseInt(req.params.id)
  // get all album as api width albumId
  const album = await (await axios.get(`/albums/${albumId}`)).data
  // get photos album as api
  const photos = await (await axios.get(`/photos?albumId=${albumId}`)).data
  const userId = album.userId
  // get user creator album width userId as api
  const user = await (await axios.get(`/users/${userId}`)).data
  // create response
  const response = {
    album,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    photos,
  }
  // send response album
  res.json(response)
})

module.exports = router
