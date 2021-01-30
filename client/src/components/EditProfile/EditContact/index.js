import { useContext } from "react"
import { Box, Container, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import EditAddress from "./EditAddress"
import EditCompany from "./EditCompany"

import userContext from "../../../contexts/userContext"

const EditContact = () => {
  const address = useContext(userContext).user.address
  const company = useContext(userContext).user.company

  const matches = useMediaQuery("(min-width:1000px)")
  const useStyles = makeStyles({
    root: {
      paddingTop: 30,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
    },
    infoItem: matches
      ? {
          flexBasis: "0",
          paddingTop: "0",
          paddingRight: ".5%",
          paddingLeft: ".5%",
          flexGrow: "1",
        }
      : { flexBasis: "100%" },
    editProfileItem: matches
      ? {
          display: "flex",
          justifyContent: "center",
        }
      : {},
  })

  const classes = useStyles()

  return (
    <Container>
      <Box className={classes.root}>
        <EditCompany company={company} infoItemStyle={classes.infoItem} />
        <EditAddress
          address={address}
          infoItemStyle={classes.infoItem}
          itemStyle={classes.editProfileItem}
        />
      </Box>
    </Container>
  )
}

export default EditContact
