import { useEffect } from "react"
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { animateScroll } from "react-scroll"

import UserProfile from "../ui/UserProfile"
import Comments from "./Comments"

import { fetchPost } from "../../redux/actions"

const Post = props => {
  const dispatch = useDispatch()
  const { post, user, comments } = useSelector(state => state.post)
  const postId = parseInt(props.match.params.id)

  useEffect(() => {
    dispatch(fetchPost(postId))
  }, [dispatch, postId])

  animateScroll.scrollToTop()

  return (
    <Box>
      <Card>
        <UserProfile id={user?.id} name={user?.name} email={user?.email} />
        <CardContent>
          <Typography variant="h5">{post?.title}</Typography>
          <Typography style={{ paddingTop: 5 }}> {post?.body} </Typography>
        </CardContent>
      </Card>
      <Box pt={2}>
        <Container>
          <Typography variant="h5">Comments : </Typography>
          <Comments comments={comments} />
        </Container>
      </Box>
    </Box>
  )
}

export default Post
