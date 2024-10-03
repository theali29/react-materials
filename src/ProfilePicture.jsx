import image from './IMG_1129.jpg'
function ProfilePicture() {
  const handleClick = (e) => (e.target.style.display = 'none')
  return <img src={image} onClick={(e) => handleClick(e)} />
}
export default ProfilePicture
