import { Box } from "@material-ui/core"

const Wrapper = props => (
  <Box pt={2} {...props}>
    {props.children}
  </Box>
)
export default Wrapper
