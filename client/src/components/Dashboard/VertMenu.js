import { useState } from "react"
import { Box, IconButton, Menu, MenuItem } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    paddingRight: 15,
  },
  link: {
    color: "#000000DE",
  },
})
const VertMenu = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(false)
  const open = Boolean(anchorEl)
  return (
    <Box className={classes.root}>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
        <MoreVert />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={e => setAnchorEl(null)}>
        <Link to="/dashboard/edit-profile" className={classes.link}>
          <MenuItem>Edit Profile</MenuItem>
        </Link>
        <Link to="/dashboard/posts" className={classes.link}>
          <MenuItem> Posts </MenuItem>
        </Link>
        <Link to="/dashboard/albums" className={classes.link}>
          <MenuItem> Albums </MenuItem>
        </Link>
      </Menu>
    </Box>
  )
}

export default VertMenu
