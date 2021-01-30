import { useState } from "react"
import { Toolbar, AppBar, Box, Button, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"

import Drawer from "./Drawer"
import Loading from "../Loading"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})
const Navigation = () => {
  const classes = useStyles()
  const [open, toggleDrawer] = useState(false)

  return (
    <Box className={classes.root}>
      <AppBar position="fixed">
        <Loading />
        <Toolbar>
          <Box className={classes.root}>
            <IconButton color="inherit" onClick={e => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={open} toggleDrawer={toggleDrawer} />
          </Box>
          <Box pr={2}>
            <Link to="/signin">
              <Button
                variant="contained"
                style={{ backgroundColor: "#222831", color: "white" }}
              >
                Sign In
              </Button>
            </Link>
          </Box>
          {/* <Box>
            <Link to="/signup">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Sign Up
              </Button>
            </Link>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
