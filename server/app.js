const express = require("express")
const cors = require("cors")

const axios = require("./routes/api/axios")

//   api routers
const albumsApi = require("./routes/api/albumsApi")
const postsApi = require("./routes/api/postsApi")
const userApi = require("./routes/api/userApi")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("build"))

// sign in api
app.post("/api/signin", async (req, res, next) => {
  const { username, email } = req.body

  const usernameArray = username.split("")
  usernameArray[0] = usernameArray[0].toUpperCase()
  const newUsername = usernameArray.join("")

  const emailArray = email.split("")
  emailArray[0] = emailArray[0].toUpperCase()
  const newEmail = emailArray.join("")

  const user = await (
    await axios.get(`/users?username=${newUsername}&email=${newEmail}`)
  ).data[0]

  res.json({
    ...user,
  })
})

//  edit profile api
app.put("/api/edit-profile", async (req, res, next) => {
  const newProfile = await (await axios.put(`/users/${req.body.id}`, req.body))
    .data

  res.json(newProfile)
})

// use as api routes
app.use("/api", albumsApi)
app.use("/api", albumsApi)
app.use("/api", postsApi)
app.use("/api", postsApi)
app.use("/api", userApi)
// //////

app.get("*", (req, res, next) => {
  res.sendFile(__dirname + "/build/")
})

module.exports = app
