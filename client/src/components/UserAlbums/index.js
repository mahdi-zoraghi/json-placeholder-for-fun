import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { animateScroll } from "react-scroll"

import { fetchUserAlbums } from "../../redux/actions"

const UserAlbums = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userProfile)
  const albums = useSelector(state => state.userAlbums)

  useEffect(() => {
    dispatch(fetchUserAlbums(user.id))
  }, [dispatch, user.id])

  animateScroll.scrollToTop()

  const matches = useMediaQuery("(min-width:1000px)")
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
    },
    btn: {
      paddingTop: 20,
      flexBasis: matches ? "auto !important" : "100%",
    },
  })

  const classes = useStyles()

  return (
    <Box pb={30}>
      {albums?.map(album => (
        <Box pt={3} key={album.id}>
          <Card>
            <CardContent>
              <Box className={classes.root}>
                <Box flexGrow={1}>
                  <Typography variant="h5"> {album.title} </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Box className={classes.btn}>
                  <Link to={`/album/${album.id}`}>
                    <Button fullWidth variant="contained" color="primary">
                      View Album
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default UserAlbums
