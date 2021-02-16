import { Box, Container } from "@material-ui/core"
import Router from "./Router"
import { Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Breadcrumps from "./components/ui/Breadcrumps"

function App() {
  return (
    <div>
      <Navigation />
      <Box pt={10}>
        <Container>
          <Route path="*" component={Breadcrumps} />
          <Router />
        </Container>
      </Box>
    </div>
  )
}
 
export default App
