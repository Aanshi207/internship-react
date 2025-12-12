import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*-+*=[]{}`~"

    for(let i = 0; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswortToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  //overflow-hidden is used for hide overflow content
  //overflow-visible is used for show overflow content
  //overflow-auto is used for overslow with scrollbar
  return (
    <>
      <div className='w-full max-w-md mx-auto items-center text-center shadow-md rounded-lg pb-10 px-4 my-8 bg-gray-500 '>
        <h1 className='text-white text-center my-3'> Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden bg-white mb-4 '>
          <input 
            type='text' 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          onClick={copyPasswortToClipboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1 text-amber-500 '> 
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input 
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                //prev
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}


export default App
