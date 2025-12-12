import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../fetures/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) { 
        alert("Please enter data")   
        return
    }
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className="flex items-center justify-center">
      <form 
        onSubmit={addTodoHandler} 
        className="flex flex-col items-center justify-center gap-4 bg-gray-900 p-8 rounded-xl shadow-xl"
      >
        <input
          type="text"
          className="w-72 md:w-96 bg-stone-300  rounded-lg border border-gray-600
                     focus:border-white focus:ring-2 focus:ring-indigo-600 
                     text-black py-2 px-4 outline-none transition-all"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="text-black bg-stone-300 py-2 px-6 rounded-lg 
                     hover:bg-stone-50 active:scale-95 transition-all"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
