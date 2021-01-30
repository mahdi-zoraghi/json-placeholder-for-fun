import { Box, Button, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"

const Link = props => {
  const matches = useMediaQuery("(min-width:700px)")

  const useStyles = makeStyles({
    root: matches ? { width: "auto !important" } : {},
  })
  const classes = useStyles()

  return (
    <Box pt={2}>
      <Box>
        <RouterLink to={props.to}>
          <Button
            fullWidth
            className={classes.root}
            variant="contained"
            color="primary"
          >
            {props.children}
          </Button>
        </RouterLink>
      </Box>
    </Box>
  )
}

export default Link
