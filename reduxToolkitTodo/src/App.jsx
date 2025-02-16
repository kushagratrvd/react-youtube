import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App