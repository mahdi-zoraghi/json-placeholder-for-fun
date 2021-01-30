import { useContext } from "react"
import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import BtnLink from "../../ui/BtnLink"

import userProfileContext from "../../../contexts/userProfileContext"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    flexGrow: 1,
  },
})
const AlbumsTab = () => {
  const classes = useStyles()

  const user = useContext(userProfileContext)

  const albums = user.albums

  return (
    <Box className={classes.root}>
      {albums.map(album => {
        return (
          <Box key={album.id} className={classes.item} pt={3} p={1.5}>
            <Card>
              <CardContent>
                <Typography variant="h5">{album.title}</Typography>
                <BtnLink to={`/album/${album.id}`}> View Album </BtnLink>
              </CardContent>
            </Card>
          </Box>
        )
      })}
    </Box>
  )
}

export default AlbumsTab
