import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 15
  //Hooks
  const [counter, setCounter] = useState(15);
  


  const addValue = () => {
    //counter = counter + 1
    if(counter < 20 ){
      setCounter(counter + 1)
    }else{
      alert("Mximun add up to 20 ")
    }
        
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("No nagative value display")
    }
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value : {counter}</h2> 

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
    </>
  )
}

export default App
