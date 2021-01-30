import { Switch, Route } from "react-router-dom"

import mapRouter from "./mapRouter"
import PrivateRoute from "./components/ui/PrivateRoute"
import { NotFound } from "./components"

const Router = () => (
  <Switch>
    {mapRouter.map(({ component, exact, path, isPrivate }, index) =>
      isPrivate ? (
        <PrivateRoute
          key={index}
          component={component}
          path={path}
          exact={exact}
        />
      ) : (
        <Route key={index} path={path} exact={exact} component={component} />
      )
    )}
    <Route component={NotFound} />
  </Switch>
)

export default Router
