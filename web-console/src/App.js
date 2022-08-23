import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './signin'
import TodoList from './todoLists'

function App() {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/todo_lists" element={<TodoList />} />
          <Route path="/" component={<TodoList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
