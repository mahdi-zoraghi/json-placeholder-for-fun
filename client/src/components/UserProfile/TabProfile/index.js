import { useState, useContext } from "react"
import { Box, Tab, Tabs } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import CompanyTab from "./CompanyTab"
import AddressTab from "./AddressTab"
import PostsTab from "./PostsTab"
import AlbumsTab from "./AlbumsTab"

import userProfileContext from "../../../contexts/userProfileContext"

const TabPanel = ({ value, index, children }) => {
  return (
    <Box>
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  )
}

const useStyles = makeStyles({
  root: {},
  tab: {
    fontSize: "13pt",
    flexGrow: 1,
  },
})

const TabProfile = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => setValue(newValue)

  const user = useContext(userProfileContext)

  return (
    <Box pt={2}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Posts" className={classes.tab} />
          <Tab label="Albums" className={classes.tab} />
          <Tab label="Company" className={classes.tab} />
          <Tab label="Address" className={classes.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PostsTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AlbumsTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompanyTab site={user?.user?.website} company={user?.user?.company} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddressTab address={user?.user?.address} />
      </TabPanel>
    </Box>
  )
}

export default TabProfile
