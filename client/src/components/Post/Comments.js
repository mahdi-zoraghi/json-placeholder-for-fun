import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core"

const Comments = ({ comments }) => {
  return (
    <Box pt={1} pb={10}>
      <Container>
        <Box>
          {comments?.map(comment => {
            return (
              <Box pt={1.5} key={comment.id}>
                <Card>
                  <CardHeader title={comment.name} subheader={comment.email} />
                  <CardContent style={{ paddingTop: 0 }}>
                    <Typography> {comment.body} </Typography>
                  </CardContent>
                </Card>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Comments
