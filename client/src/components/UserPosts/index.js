import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { animateScroll } from "react-scroll"

import BtnLink from "../ui/BtnLink"
import UserProfile from "../ui/UserProfile"

import { fetchUserPosts } from "../../redux/actions"

const UserPosts = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userProfile)
  const posts = useSelector(state => state.userPosts)

  useEffect(() => {
    dispatch(fetchUserPosts(user.id))
  }, [dispatch, user.id])

  animateScroll.scrollToTop()

  return (
    <Box pb={30}>
      <Card>
        <Box pb={3}>
          <UserProfile id={user.id} name={user.name} email={user.email} />
        </Box>
      </Card>
      {posts?.map(post => {
        return (
          <Box key={post.id} pt={3}>
            <Card>
              <CardContent>
                <Box display="flex">
                  <Box flexGrow={1}>
                    <Typography variant="h5">{post.title}</Typography>
                  </Box>
                  {/* <UserVertMenu postId={post.id} /> */}
                </Box>
                <Typography style={{ paddingTop: 5 }}>{post.body}</Typography>
                <Box pt={2}>
                  <BtnLink to={`/post/${post.id}`}>View Post</BtnLink>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )
      })}
    </Box>
  )
}

export default UserPosts
