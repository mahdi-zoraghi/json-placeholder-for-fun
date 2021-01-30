import { useContext } from "react"
import { Box, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import userContext from "../../contexts/userContext"

import Input from "../ui/Input"
import Wrapper from "../ui/Wrapper"

const EditInfo = () => {
  const userContextValue = useContext(userContext)
  const user = userContextValue.user
  const setUser = userContextValue.setUser

  const matches = useMediaQuery("(min-width:1000px)")

  const useStyles = makeStyles({
    root: matches
      ? {
          display: "flex",
          justifyContent: "space-evenly",
        }
      : {},
  })

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Wrapper>
        <Input
          label="Email"
          value={user.email}
          onChange={e =>
            setUser(prevState => ({ ...prevState, email: e.target.value }))
          }
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="Phone"
          value={user.phone}
          onChange={e =>
            setUser(prevState => ({ ...prevState, phone: e.target.value }))
          }
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="Web Site"
          value={user.website}
          onChange={e =>
            setUser(prevState => ({ ...prevState, website: e.target.value }))
          }
        />
      </Wrapper>
    </Box>
  )
}

export default EditInfo
