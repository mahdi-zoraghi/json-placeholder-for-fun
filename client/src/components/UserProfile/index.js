import { Card, CardContent } from "@material-ui/core"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { animateScroll } from "react-scroll"

import Profile from "../ui/UserProfile"
import TabProfile from "./TabProfile/index"

import userProfileContext from "../../contexts/userProfileContext"

import { fetchUser } from "../../redux/actions"

const UserProfile = props => {
  const userId = parseInt(props.match.params.id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [dispatch, userId])
  const user = useSelector(state => state.user)

  animateScroll.scrollToTop()

  return user.posts ? (
    <Card>
      <userProfileContext.Provider value={user}>
        <Profile
          id={user?.user?.id}
          name={user?.user?.name}
          email={user?.user?.email}
        />
        <CardContent>
          <TabProfile />
        </CardContent>
      </userProfileContext.Provider>
    </Card>
  ) : null
}

export default UserProfile
