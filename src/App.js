import logo from './logo.svg'
// import './App.css';
import Header from './header.jsx'
import Footer from './footer.jsx'
import Food from './food.jsx'
import Button from './Button.jsx'
import Card from './card.jsx'
import Student from './students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import ColorPicker from './colorpicker.jsx'
import ToDoList from './ToDoList.jsx'
import DigitalClock from './digitalclock.js'
import ComponentA from './ComponentA.jsx'
import Stopwatch from './Stopwatch.jsx'
function App() {
  // const fruits = [
  //   { id: 1, name: 'apple', calories: 96 },
  //   { id: 2, name: 'orange', calories: 45 },
  //   { id: 3, name: 'berries', calories: 12 },
  // ]
  // const vegetables = [
  //   { id: 4, name: 'potatoes', calories: 110 },
  //   { id: 5, name: 'celery', calories: 15 },
  //   { id: 6, name: 'corn', calories: 63 },
  // ]
  // return (
  //   //for props
  //   <>
  //     <Student name='Spongebob' age='40' isStudent={true} CGPA={4.0} />
  //     <Student name='Patrick' age={52} isStudent={false} CGPA={3.49} />
  //     <Student name='Squid wad' age={52} isStudent={false} CGPA={3.34} />
  //   </>
  // )

  // <>
  //   <UserGreeting isLoggedIn={true} />
  // </>
  //   <>
  //     {fruits.length > 0 && <List items={fruits} category='Fruits' />}
  //     {fruits.length > 0 && <List items={vegetables} category='Vegetables' />}
  //   </>
  // )
  return <Stopwatch />
}

export default App
