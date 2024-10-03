import React, { useState, useEffect, useRef } from 'react'
import food from './food'
import List from './List'

function MyComponent() {
  // const [count, setCount] = useState(0)
  // const [status, setStatus] = useState(false)
  // const incrementer = () => {
  //   //Takes the previous state to calculae next state
  //   // React puts your updater function in a queue( waiting in line)
  //   //During the next render, it will call them in the same oder
  //   setCount((c) => c + 1)
  //   setCount((c) => c + 1)
  //   setCount((c) => c + 1)
  // }
  // const decrementer = () => {
  //   setCount((c) => c - 1)
  //   setCount((c) => c - 1)
  //   setCount((c) => c - 1)
  // }
  // const reseter = () => {
  //   setCount(0)
  // }
  // const counterStatus = () => {
  //   setStatus(!status)
  // }
  // return (
  //   <>
  //     <div className='counter-container'>
  //       <h2 className='abp'>{count}</h2>
  //       <button className='isrbutton' onClick={decrementer}>
  //         Decrement
  //       </button>
  //       <button className='isrbutton' onClick={reseter}>
  //         Reset
  //       </button>
  //       <button className='isrbutton' onClick={incrementer}>
  //         Increment
  //       </button>
  //       <h3>Is Counter Status True: {status ? 'Yes' : 'No'}</h3>
  //       <button onClick={counterStatus}>Toggle</button>
  //     </div>
  //   </>
  // )
  // const [name, setName] = useState('Guest')
  // const [quantity, setQuantity] = useState(1)
  // const [comment, setComment] = useState('')
  // const [payment, setPayment] = useState('Delivery')
  // //radio
  // const [shipping, setShipping] = useState()
  // function handeNameChange(event) {
  //   setName(event.target.value)
  // }
  // function handeQuantityChange(event) {
  //   setQuantity(event.target.value)
  // }
  // function handleCommentChange(event) {
  //   setComment(event.target.value)
  // }
  // function handlePaymentChange(event) {
  //   setPayment(event.target.value)
  // }
  // function handleShippingChange(event) {
  //   setShipping(event.target.value)
  // }
  // return (
  //   <>
  //     <div>
  //       <input value={name} onChange={handeNameChange} />
  //       <p>Name:{name}</p>
  //       <input value={quantity} onChange={handeQuantityChange} type='number' />
  //       <p>Quantity:{quantity}</p>
  //       <textarea
  //         value={comment}
  //         onChange={handleCommentChange}
  //         placeholder='Enter delivery instructions'
  //       />
  //       <p>Comment:{comment}</p>
  //       <select value={payment} onChange={handlePaymentChange}>
  //         <option value=''>Select an option</option>
  //         <option value='Visa'>Visa</option>
  //         <option value='Mastercard'>Mastercard</option>
  //         <option value='Giftcard'>Giftcard</option>
  //       </select>
  //       <p>Payment:{payment}</p>
  //       <label>
  //         <input
  //           type='radio'
  //           value='Pick Up'
  //           checked={shipping === 'Pick Up'}
  //           onChange={handleShippingChange}
  //         />
  //         Pick Up
  //       </label>
  //       <label htmlFor=''>
  //         <input
  //           type='radio'
  //           value='Delivery'
  //           checked={shipping === 'Delivery'}
  //           onChange={handleShippingChange}
  //         />
  //         Delivery
  //       </label>
  //       <p>Shipping:{shipping}</p>
  //     </div>
  //   </>
  // )
  // const [car, setCar] = useState({
  //   year: 2024,
  //   make: 'Ford',
  //   model: 'Mustang',
  // })
  // function handleYearChange(event) {
  //   setCar((c) => ({ ...c, year: event.target.value }))
  // }
  // function handleMakeChange(event) {
  //   setCar((c) => ({ ...c, make: event.target.value }))
  // }
  // function handleModelChange(event) {
  //   setCar((c) => ({ ...c, model: event.target.value }))
  // }
  // return (
  //   <div>
  //     <p>
  //       Your favorite car is: {car.year} {car.make} {car.model}
  //     </p>
  //     <input type='number' value={car.year} onChange={handleYearChange} />
  //     <br />
  //     <input type='text' value={car.make} onChange={handleMakeChange} />
  //     <br />
  //     <input type='text' value={car.model} onChange={handleModelChange} />
  //     <br />
  //   </div>
  // )
  //updating state of arrays using react
  // const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])
  // function handleAddFood() {
  //   const newFood = document.getElementById('foodInput').value
  //   document.getElementById('foodInput').value = ''
  //   setFoods((f) => [...f, newFood])
  // }
  // function handleRemoveFood(index) {
  //   setFoods(foods.filter((_, i) => i !== index))
  // }
  // return (
  //   <>
  //     <div>
  //       <h2>List of food</h2>
  //       <ul>
  //         {foods.map((food, index) => (
  //           <li key={index} onClick={() => handleRemoveFood(index)}>
  //             {food}
  //           </li>
  //         ))}
  //       </ul>
  //       <input type='text' id='foodInput' placeholder='Enter food name' />
  //       <button onClick={handleAddFood}>Add Food</button>
  //     </div>
  //   </>
  // )
  // List of CAR OBJECTS
  // const [cars, setCars] = useState([])
  // const [carYear, setCarYear] = useState(new Date().getFullYear())
  // const [carMake, setCarMake] = useState([])
  // const [carModel, setCarModel] = useState('')
  // function handleAddCar() {
  //   const newCar = { year: carYear, make: carMake, model: carModel }
  //   setCars((c) => [...c, newCar])
  //   setCarYear(new Date().getFullYear())
  //   setCarMake('')
  //   setCarModel('')
  // }
  // function handleRemoveCar(index) {
  //   setCars((c) => c.filter((_, i) => i !== index))
  // }
  // function handleYearChange(event) {
  //   setCarYear(event.target.value)
  // }
  // function handleMakeChange(event) {
  //   setCarMake(event.target.value)
  // }
  // function handleModelChange(event) {
  //   setCarModel(event.target.value)
  // }
  // return (
  //   <>
  //     <div>
  //       <h2>List of Car Objects</h2>
  //       <ul>
  //         {cars.map((car, index) => (
  //           <li key={index} onClick={() => handleRemoveCar(index)}>
  //             {car.year} {car.make} {car.model}
  //           </li>
  //         ))}
  //       </ul>
  //       <input type='number' value={carYear} onChange={handleYearChange} />
  //       <br />
  //       <input
  //         type='text'
  //         value={carMake}
  //         onChange={handleMakeChange}
  //         placeholder='Enter car make'
  //       />
  //       <br />
  //       <input
  //         type='text'
  //         value={carModel}
  //         onChange={handleModelChange}
  //         placeholder='Enter car model'
  //       />
  //       <br N />
  //       <button onClick={handleAddCar}>Add car</button>
  //     </div>
  //   </>
  // )
  // const [count, setCount] = useState(0)
  // const [color, setColor] = useState('green')
  // useEffect(() => {
  //   document.title = `Count: ${count} ${color}`
  //   return () => {
  //     //some cleanup code
  //   }
  // }, [count, color])
  // function addCount() {
  //   setCount((c) => c + 1)
  // }
  // function subtractCount() {
  //   setCount((c) => c - 1)
  // }
  // function changeColor() {
  //   setColor((c) => (c === 'green' ? 'red' : 'green'))
  // }
  // return (
  //   <>
  //     <p style={{ color: color }}>Count:{count}</p>
  //     <button onClick={addCount}>Add</button>
  //     <button onClick={subtractCount}>Subtract</button>
  //     <br />
  //     <button onClick={changeColor}>Change Color</button>
  //   </>
  // )
  // const [width, setWidth] = useState(window.innerWidth)
  // const [height, setHeight] = useState(window.innerHeight)
  // //without useEffect
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  //   console.log('event add listener')
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //     console.log('Event Listener Removed')
  //   }
  // }, [])
  // useEffect(() => {
  //   document.title = `Size ${width} x ${height}`
  // }, [width, height])
  // function handleResize() {
  //   setWidth(window.innerWidth)
  //   setHeight(window.innerHeight)
  // }
  // return (
  //   <>
  //     <p>Window Width: {width}px</p>
  //     <p>Window Height: {height}px</p>
  //   </>
  // )
  // let [number, setNumber] = useState(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  useEffect(() => {
    console.log('Component Rendered')
  })
  function handleClick1() {
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = 'yellow'
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
  }
  function handleClick2() {
    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = 'yellow'
    inputRef1.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
  }
  function handleClick3() {
    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = 'yellow'
    inputRef1.current.style.backgroundColor = ''
    inputRef2.current.style.backgroundColor = ''
  }
  return (
    <>
      <div>
        <button onClick={handleClick1}>click me!</button>
        <input ref={inputRef1} />
        <br />
        <button onClick={handleClick2}>click me!</button>
        <input ref={inputRef2} />
        <br />
        <button onClick={handleClick3}>click me!</button>
        <input ref={inputRef3} />
        <br />
      </div>
    </>
  )
}
export default MyComponent
