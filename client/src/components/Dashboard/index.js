import { Box, Card, CardContent, CardHeader } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useSelector } from "react-redux"

import UserInfo from "./UserInfo"
import VertMenu from "./VertMenu"
import UserContact from "./UserContact"

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "baseline",
  },
  header: {
    flexGrow: 1,
  },
})

const Dashboard = () => {
  const classes = useStyles()
  const user = useSelector(state => state.userProfile)
  return (
    <Box>
      <Card>
        <Box className={classes.root}>
          <CardHeader
            title={user.name}
            subheader={user.username}
            className={classes.header}
          />
          <VertMenu />
        </Box>
        <CardContent>
          <UserInfo user={user} />
        </CardContent>
      </Card>
      <UserContact address={user.address} company={user.company} />
    </Box>
  )
}

export default Dashboard
