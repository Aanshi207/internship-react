import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kiwi",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-amber-50 text-gray-950 font-bold text-heading p-4 rounded-4xl mb-11~'>
        Tailwind test
      </h1>
      <Card channel="React Tutorial" btnText="Click me"/>
      <Card channel="react"/>
      
    </>
  )
}

export default App
