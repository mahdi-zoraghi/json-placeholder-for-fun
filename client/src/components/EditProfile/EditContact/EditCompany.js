import { useContext } from "react"
import { Box, Card, CardContent, Typography } from "@material-ui/core"

import Input from "../../ui/Input"
import Wrapper from "../../ui/Wrapper"

import userContext from "../../../contexts/userContext"

const EditCompany = ({ company, infoItemStyle }) => {
  const { name, catchPhrase, bs } = company

  const setUser = useContext(userContext).setUser

  const handleChangeName = e => {
    setUser(prevState => ({
      ...prevState,
      company: { ...prevState.company, name: e.target.value },
    }))
  }

  const handleChangeCatch = e => {
    setUser(prevState => ({
      ...prevState,
      company: { ...prevState.company, catchPhrase: e.target.value },
    }))
  }

  const handleChangeBs = e => {
    setUser(prevState => ({
      ...prevState,
      company: { ...prevState.company, bs: e.target.value },
    }))
  }

  return (
    <Box className={infoItemStyle}>
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5"> Company </Typography>
            <Box>
              <Wrapper>
                <Input label="Name" value={name} onChange={handleChangeName} />
              </Wrapper>
              <Wrapper>
                <Input
                  label="Catch Phrase"
                  value={catchPhrase}
                  onChange={handleChangeCatch}
                />
              </Wrapper>
              <Wrapper>
                <Input label="Bs" value={bs} onChange={handleChangeBs} />
              </Wrapper>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default EditCompany
