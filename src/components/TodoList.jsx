import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo }) {
  return (
    <div className='mt-3 text-sm'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}
