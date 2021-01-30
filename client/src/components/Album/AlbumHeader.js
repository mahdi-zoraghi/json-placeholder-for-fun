import { Card, CardContent, Typography } from "@material-ui/core"

import UserProfile from "../ui/UserProfile"

const AlbumHeader = ({ title, userId, name, email }) => {
  return (
    <Card>
      <UserProfile id={userId} name={name} email={email} />
      <CardContent>
        <Typography variant="h5"> {title} </Typography>
      </CardContent>
    </Card>
  )
}

export default AlbumHeader
