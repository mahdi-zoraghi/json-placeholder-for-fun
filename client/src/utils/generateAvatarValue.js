const generateAvatarValue = (name = "") => {
  const nameArray = name.split(" ")
  const newName = nameArray.map(chungName => chungName.slice(0, 1))
  return newName.join("")
}
 
export default generateAvatarValue
