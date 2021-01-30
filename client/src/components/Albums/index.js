import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Pagination, PaginationItem } from "@material-ui/lab"
import { animateScroll } from "react-scroll"

import BtnLink from "../ui/BtnLink"
import UserProfile from "../ui/UserProfile"

import { fetchAlbums } from "../../redux/actions"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})

const Albums = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums(1))
  }, [dispatch])

  animateScroll.scrollToTop()

  const page = useSelector(state => state.albums)
  const countPage = page.countPage
  const albums = page.album
  const pageNumber = page.pageNumber || 1

  const setPage = pageNumber => {
    dispatch(fetchAlbums(pageNumber))
  }

  return (
    <Box pb={30}>
      {albums?.map(album => {
        return (
          <Box pt={3} key={album.id}>
            <Card>
              <UserProfile
                id={album.userId}
                name={album.name}
                email={album.email}
              />
              <CardContent>
                <Typography variant="h5">{album.title}</Typography>
                <BtnLink to={`/album/${album.id}`}> View Album </BtnLink>
              </CardContent>
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

export default Albums
