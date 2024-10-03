import image from './IMG_1129.jpg'
function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={image} alt='Profile Picture' />
      <h2 className='card-title'>Mohammad Ali</h2>
      <p className='card-text'>I make websites</p>
    </div>
  )
}
export default Card
