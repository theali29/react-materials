import PropTypes from 'prop-types'
function List(props) {
  // const fruits = [
  //   { id: 1, name: 'apple', calories: 96 },
  //   { id: 2, name: 'orange', calories: 45 },
  //   { id: 3, name: 'berries', calories: 12 },
  // ]
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical; sort
  //   fruits.sort((a, b) => b.name.localeCompare(s.name)) //reverse; sort

  //fruits.sort((a, b) => a.calories - b.calories) //Alphabetical; sort
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100)
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 50)

  const category = props.category
  const itemList = props.items

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ))

  return (
    <>
      <h3 className='list-category '>{category}</h3>
      <ol className='list-items '>{listItems}</ol>
    </>
  )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
}
List.defaultProps = {
  category: 'Category',
  items: [],
}
export default List
