import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Pagination, PaginationItem } from "@material-ui/lab"
import { animateScroll } from "react-scroll"

import Post from "../ui/Post"
import UserProfile from "../ui/UserProfile"

import { fetchPosts } from "../../redux/actions"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})

function Home() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const page = useSelector(state => state.posts)
  const countPage = page.countPage
  const posts = page.page
  const pageNumber = page.pageNumber || 1

  const setPage = pageNumber => {
    dispatch(fetchPosts(pageNumber))
  }

  animateScroll.scrollToTop()

  useEffect(() => {
    dispatch(fetchPosts(1))
  }, [dispatch])

  return (
    <Box pb={30}>
      {posts?.map((post, index) => {
        return (
          <Box pt={3} key={index}>
            <Card>
              <UserProfile
                id={post.userId}
                name={post.name}
                email={post.email}
              />
              <Post title={post.title} body={post.body} id={post.id} />
            </Card>
          </Box>
        )
      })}
      <Box className={classes.root}>
        <Pagination
          count={countPage}
          color="primary"
          size="large"
          renderItem={item => {
            item.onClick = e => setPage(item.page)
            if (item.type === "page") {
              if (item.page === pageNumber) item.selected = true
              else {
                item.selected = false
              }
            }
            return <PaginationItem component={Box} {...item} />
          }}
        />
      </Box>
    </Box>
  )
}

export default Home
