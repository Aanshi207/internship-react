import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl bg-stone-200 p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl text-black font-bold text-center mb-6">
          Redux Toolkit Todo App
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
