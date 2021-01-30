import {
  Box,
  Drawer as MateriaDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import { Dashboard, Email, PhotoAlbum } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: 250,
    textAlign: "center",
  },
  link: {
    color: "#000000DE",
  },
})
const Drawer = ({ open, toggleDrawer }) => {
  const classes = useStyles()
  const onClose = () => toggleDrawer(false)

  return (
    <MateriaDrawer open={open} anchor="left" onClose={onClose}>
      <Box className={classes.root}>
        <List>
          <Link to="/dashboard" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItem>
          </Link>
          <Link to="/albums" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <PhotoAlbum />
              </ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItem>
          </Link>
        </List>
      </Box>
    </MateriaDrawer>
  )
}

export default Drawer
