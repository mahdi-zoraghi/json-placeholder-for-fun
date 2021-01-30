import { Box, Typography } from "@material-ui/core"

import Wrapper from "../../ui/Wrapper"

const AddressTab = ({ address }) => {
  return (
    <Box>
      <Wrapper>
        <Typography variant="h5">
          {address.city} - {address.street} - {address.suite}
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography>
          Lat : {address.geo.lat} Lag : {address.geo.lng}
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography> Zipcode : {address.zipcode} </Typography>
      </Wrapper>
    </Box>
  )
}

export default AddressTab
