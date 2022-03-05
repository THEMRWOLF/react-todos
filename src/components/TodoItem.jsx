import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo

  const todoClick = event => {
    toggleTodo(id)
    event.target.classList.toggle('line-through')
    event.target.classList.toggle('opacity-30')
  }

  return (
    <div onClick={todoClick} className='p-2 mt-2 border-b-2 rounded cursor-pointer bg-zinc-700 border-zinc-500 hover:bg-zinc-500 text-slate-300'>
      {task}
    </div>
  )
}
