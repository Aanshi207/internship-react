import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button
            className='ontline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer'
            style={{backgroundColor:"LightGreen"}}
            onClick={() => setColor("LightGreen")}
            >LightGreen</button>

            <button
            className='ontline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{backgroundColor:"Lightyellow"}}
            onClick={() => setColor("Lightyellow")}
            >LightYellow</button>

            <button
            className='ontline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer'
            style={{backgroundColor:"LightSeaGreen"}}
            onClick={() => setColor("LightSeaGreen")}
            >LightSeaGreen</button>

            <button
            className='ontline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer '
            style={{backgroundColor:"Lavender"}}
            onClick={() => setColor("Lavender")}
            >Lavender</button>

            <button
            className='ontline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer '
            style={{backgroundColor:"LightPink"}}
            onClick={() => setColor("LightPink")}
            >Light Pink</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
