import React, { useState } from 'react'

const Todos = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, updateNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newTodo) return

    addTodo(newTodo)
    updateNewTodo('')
  }

  return (
    <div className="border border-grey-light bg-grey-lighter rounded p-4">
      {todos.map((todo, i) => (
        <div
          key={i}
          className="mb-2 border border-grey-dark bg-white p-2 rounded-sm flex justify-between"
        >
          <span>{todo}</span>
          <span
            className="text-red text-sm cursor-pointer"
            onClick={() => removeTodo(i)}
          >
            remove
          </span>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => updateNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Todos
