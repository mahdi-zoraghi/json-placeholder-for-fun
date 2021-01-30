import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { useContext } from "react"

import userContext from "../../../contexts/userContext"

import Input from "../../ui/Input"
import Wrapper from "../../ui/Wrapper"

const EditAddress = ({ address, infoItemStyle, itemStyle }) => {
  const { city, street, suite, zipcode, geo } = address

  const setUser = useContext(userContext).setUser

  const handleChangeCity = e => {
    setUser(prevState => ({
      ...prevState,
      address: { ...prevState.address, city: e.target.value },
    }))
  }

  const handleChangeStreet = e => {
    setUser(prevState => ({
      ...prevState,
      address: { ...prevState.address, street: e.target.value },
    }))
  }

  const handleChangeSuite = e => {
    setUser(prevState => ({
      ...prevState,
      address: { ...prevState.address, suite: e.target.value },
    }))
  }

  const handleChangeZipcode = e => {
    setUser(prevState => ({
      ...prevState,
      address: { ...prevState.address, zipcode: e.target.value },
    }))
  }

  const handleChangeLat = e => {
    setUser(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        geo: { ...prevState.address.geo, lat: e.target.value },
      },
    }))
  }

  const handleChangeLng = e => {
    setUser(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        geo: { ...prevState.address.geo, lng: e.target.value },
      },
    }))
  }

  return (
    <Box pt={4} className={infoItemStyle}>
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5"> Address </Typography>
            <Box>
              <Wrapper display="flex">
                <Box className={itemStyle} width="100%">
                  <Box pl={0.5} pr={0.5} pt={1}>
                    <Input
                      label="City"
                      value={city}
                      onChange={handleChangeCity}
                    />
                  </Box>
                  <Box pl={0.5} pr={0.5} pt={1}>
                    <Input
                      label="Street"
                      value={street}
                      onChange={handleChangeStreet}
                    />
                  </Box>
                  <Box pl={0.5} pr={0.5} pt={1}>
                    <Input
                      label="suite"
                      value={suite}
                      onChange={handleChangeSuite}
                    />
                  </Box>
                </Box>
              </Wrapper>
              <Wrapper>
                <Input
                  label="Zip code"
                  value={zipcode}
                  onChange={handleChangeZipcode}
                />
              </Wrapper>
              <Wrapper>
                <Input label="Lat" value={geo.lat} onChange={handleChangeLat} />
              </Wrapper>
              <Wrapper>
                <Input label="Lng" value={geo.lng} onChange={handleChangeLng} />
              </Wrapper>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default EditAddress
