import { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"

const Breadcrumps = props => {
  const [pathname, setPathname] = useState(props.match.url)
  const itemOneItsUpperCase = item => {
    const items = item.split("")
    items[0] = items[0].toUpperCase()
    const newItem = items.join("")
    return newItem
  }
  const rotesList = pathname.split("-").join(" ").split("/")
  const rote = []
  rotesList.forEach(roteItem => {
    roteItem ? rote.push(itemOneItsUpperCase(roteItem)) : rote.push("")
  })
  const roteView = rote.join("/")

  useEffect(() => {
    setPathname(props.match.url)
  }, [props.match.url])

  return <Typography> {roteView === "/" ? null : roteView} </Typography>
}

export default Breadcrumps
