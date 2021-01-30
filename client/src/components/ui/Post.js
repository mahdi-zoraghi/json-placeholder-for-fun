import { CardContent, Typography } from "@material-ui/core";
import BtnLink from "./BtnLink";

const Post = ({ title, body, id }) => {
  return (
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography style={{ paddingTop: 5 }}> {body} </Typography>
      <BtnLink to={`/post/${id}`}> View Post </BtnLink>
    </CardContent>
  );
};

export default Post;
