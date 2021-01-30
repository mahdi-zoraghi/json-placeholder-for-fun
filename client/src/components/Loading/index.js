import { Box } from "@material-ui/core"
import { useSelector } from "react-redux"
import BarLoader from "react-spinners/BarLoader"

const Loading = () => {
  const loading = useSelector(state => state.loading)

  return (
    <Box>
      {loading ? (
        <BarLoader
          size={150}
          css={{ width: "100%" }}
          color="rgb(54, 215, 183)"
          loading={loading}
        />
      ) : null}
    </Box>
  )
}

export default Loading
