import { useState } from "react"
import {
  Box,
  TextField,
  Typography,
  CardContent,
  Card,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useDispatch } from "react-redux"

import { signIn as signin } from "../../redux/actions"

let signIn

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "60vh",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 3,
  },
  form: {
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formItem: {
    flexBasis: "100%",
    paddingTop: 25,
  },
  formSubmit: {
    flexBasis: "70%",
    paddingTop: 25,
  },
})

const SignIn = props => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const signinSuccess = response => {
    console.log("user founded ")
    props.history.push("/dashboard")
  }
  const signinUserNotFound = response => {
    alert("user not found")
  }

  signIn = (username, email) => {
    dispatch(signin(username, email, signinSuccess, signinUserNotFound))
  }

  const handleSignIn = e => {
    e.preventDefault()
    signIn(username, email)
  }

  return (
    <Box className={classes.root}>
      <Box>
        <Card>
          <CardContent>
            <Box className={classes.card}>
              <Box flexBasis="100%">
                <Typography variant="h4"> Sign In Page </Typography>
              </Box>
              <Box component="form" className={classes.form}>
                <Box className={classes.formItem}>
                  <TextField
                    fullWidth
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    label="Username"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.formItem}>
                  <TextField
                    fullWidth
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.formSubmit}>
                  <Button
                    disabled={!username || !email}
                    onClick={handleSignIn}
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default SignIn
