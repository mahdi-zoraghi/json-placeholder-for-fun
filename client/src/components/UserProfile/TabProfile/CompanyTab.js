import { Box, Typography, Button } from "@material-ui/core"

import Wrapper from "../../ui/Wrapper"

const CompanyTab = ({ site, company }) => {
  return (
    <Box>
      <Wrapper>
        <Typography variant="h5">Company Name : {company.name}</Typography>
      </Wrapper>
      <Wrapper>
        <Typography>bs : {company.bs}</Typography>
      </Wrapper>
      <Wrapper>
        <Typography>catchPhrase : {company.catchPhrase}</Typography>
      </Wrapper>
      <Wrapper>
        <Button color="primary" variant="contained" href={`http://${site}`}>
          {site}
        </Button>
      </Wrapper>
    </Box>
  )
}

export default CompanyTab
