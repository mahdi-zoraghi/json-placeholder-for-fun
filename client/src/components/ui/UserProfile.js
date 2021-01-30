import { Avatar, CardHeader } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"

import generateAvatarValue from "../../utils/generateAvatarValue"

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
  },
  header: {
    paddingBottom: 0,
  },
})

const Profile = ({ id, name, email }) => {
  const classes = useStyles()

  return (
    <Link to={`/user/${id}`} className={classes.link}>
      <CardHeader
        className={classes.header}
        avatar={<Avatar> {generateAvatarValue(name)} </Avatar>}
        title={name}
        subheader={email}
      />
    </Link>
  )
}

export default Profile
