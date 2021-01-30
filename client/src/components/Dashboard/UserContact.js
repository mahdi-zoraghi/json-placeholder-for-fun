import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Wrapper from "../ui/Wrapper"

const UserContact = ({ address, company }) => {
  const matches = useMediaQuery("(min-width:1000px)")
  const infoItemStyle = matches
    ? {
        flexBasis: "0",
        paddingTop: " 0",
        paddingRight: ".5%",
        paddingLeft: ".5%",
        flexGrow: "1",
      }
    : { flexBasis: "100% " }

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      paddingTop: 20,
      paddingBottom: 300,
    },
    infoItem: infoItemStyle,
  })
  const classes = useStyles()

  return (
    <Container>
      <Box className={classes.root}>
        <Box className={classes.infoItem}>
          <Box>
            <Card>
              <CardContent>
                <Typography variant="h5"> Company </Typography>
                <Box>
                  <Wrapper>
                    <Typography> Name : {company.name} </Typography>
                  </Wrapper>
                  <Wrapper>
                    <Typography>
                      Catch Phrase : {company.catchPhrase}
                    </Typography>
                  </Wrapper>
                  <Wrapper>
                    <Typography> Bs : {company.bs} </Typography>
                  </Wrapper>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box pt={4} className={classes.infoItem}>
          <Box>
            <Card>
              <CardContent>
                <Typography variant="h5"> Address </Typography>
                <Wrapper>
                  <Typography>
                    {address.city} - {address.street} - {address.suite}
                  </Typography>
                  <Wrapper>
                    <Typography>Zip Code : {address.zipcode}</Typography>
                  </Wrapper>
                  <Wrapper>
                    <Typography>
                      Lat : {address.geo.lat} - Lng : {address.geo.lng}
                    </Typography>
                  </Wrapper>
                </Wrapper>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default UserContact
