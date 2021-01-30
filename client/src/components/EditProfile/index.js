import { useState } from "react"
import { Box, Button, Card, CardContent, CardHeader } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useSelector, useDispatch } from "react-redux"

import EditInfo from "./EditInfo"
import EditContact from "./EditContact/index"
import UserContext from "../../contexts/userContext"

import { editProfileRequest } from "../../redux/actions"

const useStyles = makeStyles({
  root: {
    paddingBottom: 300,
  },
  headerContainer: {
    display: "flex",
    alignItems: "baseline",
  },
  header: {
    flexGrow: 1,
  },
})
const EditProfile = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userProfile)
  const [userState, setUserState] = useState(user)

  const handleChangeProfile = () => {
    dispatch(editProfileRequest(userState))
  }

  return (
    <Box className={classes.root}>
      <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
        <Card>
          <Box className={classes.headerContainer}>
            <CardHeader
              title={userState.name}
              subheader={userState.username}
              className={classes.header}
            />
            <Box pr={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleChangeProfile}
              >
                Save Change
              </Button>
            </Box>
          </Box>
          <CardContent>
            <EditInfo />
          </CardContent>
        </Card>
        <EditContact />
      </UserContext.Provider>
    </Box>
  )
}

export default EditProfile
