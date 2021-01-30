import { Box, Typography } from "@material-ui/core"

import Wrapper from "../ui/Wrapper"

const UserInfo = ({ user }) => {
  return (
    <Box>
      <Wrapper>
        <Typography> Email : {user.email} </Typography>
      </Wrapper>
      <Wrapper>
        <Typography> Phone : {user.phone} </Typography>
      </Wrapper>
      <Wrapper>
        <Typography>
          <a href={`http://${user.website}`}>{user.website}</a>
        </Typography>
      </Wrapper>
    </Box>
  )
}

export default UserInfo
