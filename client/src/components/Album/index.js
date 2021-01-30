import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { animateScroll } from "react-scroll"

import AlbumHeader from "./AlbumHeader"

import { fetchAlbum } from "../../redux/actions"

const useStyles = makeStyles({
  root: {
    paddingTop: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    paddingTop: 20,
    textAlign: "center",
    flexGrow: 1,
    padding: 20,
  },
})

const Album = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const albumId = parseInt(props.match.params.id)
  const { album, user, photos } = useSelector(state => state.album)

  useEffect(() => {
    dispatch(fetchAlbum(albumId))
  }, [dispatch, albumId])

  animateScroll.scrollToTop()

  return (
    <Box>
      <AlbumHeader
        userId={user?.id}
        name={user?.name}
        email={user?.email}
        title={album?.title}
      />
      <Container>
        <Box className={classes.root}>
          {photos?.map(photo => {
            return (
              <Box className={classes.item} key={photo.id}>
                <Card>
                  <CardContent>
                    <Typography> {photo.title} </Typography>
                    <Box pt={2}>
                      <a href={photo.url}>
                        <img
                          style={{ borderRadius: 8 }}
                          src={photo.thumbnailUrl}
                          alt={photo.title}
                        />
                      </a>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Album
