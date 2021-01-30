import { useContext } from "react"
import { Box, Card } from "@material-ui/core"
import Post from "../../ui/Post"

import userProfileContext from "../../../contexts/userProfileContext"

const PostsTab = () => {
  const user = useContext(userProfileContext)

  const posts = user?.posts

  return (
    <Box>
      {posts
        ? posts.map(({ id, title, body }) => (
            <Box pb={3} key={id}>
              <Card>
                <Post title={title} body={body} id={id} />
              </Card>
            </Box>
          ))
        : null}
    </Box>
  )
}

export default PostsTab
