import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { TodoList } from './components/TodoList'

const KEY = 'todoApp.todos'

export function App() {
  const [todos, setTodos] = useState([])

  const todoTaskRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = id => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const handleTodoItemAdd = event => {
    if (event.key !== 'Enter') return
    const task = todoTaskRef.current.value
    if (task === '') return alert('Empty')

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), task, completed: false }]
    })

    todoTaskRef.current.value = null
  }

  const handleTodoClearAll = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className='flex items-center justify-center w-full min-h-screen p-8 select-none bg-zinc-900'>
      <div className='px-6 py-4 border-2 rounded shadow w-80 bg-zinc-900 border-zinc-700 shadow-zinc-700 '>
        <h1 className='text-2xl text-center text-slate-300'>Tasks</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className='flex flex-row content-center'>
          <input onKeyDown={handleTodoItemAdd} ref={todoTaskRef} type='text' placeholder='New task' className='w-full p-2 mt-3 bg-transparent outline-none text-slate-300' />
          <button onClick={handleTodoClearAll} className='h-10 p-2 mt-3'>🗑</button>
        </div>
      </div>
    </div>
  )
}