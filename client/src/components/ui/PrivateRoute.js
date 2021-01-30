import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = props => {
  const userId = useSelector(state => state.userProfile).id

  return userId ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/signin" />
  )
}

export default PrivateRoute
